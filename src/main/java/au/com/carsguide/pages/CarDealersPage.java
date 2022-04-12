package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

/**
 * By Bhoomi
 **/
public class CarDealersPage extends Utility {

    public CarDealersPage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='listing-pagination']//li[@class='']//a")
    List<WebElement> pages;
    @CacheLookup
    @FindBy(xpath = "//div[@class='container dealer-result-container']//div[@class='dealerListing--name']//a")
//    @FindBy(xpath = "//div[@class='dealer-listings row']//div[@class='dealerListing--name']//a")
    List<WebElement> dealersList;

    public String clickOnPage( String p) {
        String dealerNm = "";
        for (WebElement page : pages) {
//            System.out.println(page.getText());
            if (page.getText().equals(p) && (p!="1")) {
                page.click();
//                waitForElementWithFluentWait(page, 2,60);
                break;
            }
        }

        return dealerNm;
    }
    public String findDealer(String dealerName){
        String dealerNm = "";
//        Thread.sleep(2000);

        for (WebElement dealer:dealersList) {
            if (dealer.getText().equals(dealerName))
            {
                dealerNm=  dealer.getText();
//                System.out.println(dealer.getText());
                break;
            }
        }
        return dealerNm;
    }

}
