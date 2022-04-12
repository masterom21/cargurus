package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

/**
 * By Bhoomi
 **/
public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

public HomePage(){
    PageFactory.initElements(driver,this);
}


    //    @FindBy(xpath = "//div[@id='u_H']/div[1]/div[1]/ul[1]")
//    @FindBy(xpath = "//ul[@class='uhf-menu']//li[contains(@class,'uhf-menu-item uhf-dropdown-menu-toggle')]")
//    @FindBy(xpath = "//div[@id='u_H']/div[1]/div[1]/ul[1]")
    @CacheLookup
    @FindBy(xpath = "//ul[@class='uhf-menu']//li//a[@class='uhf-top']")

    List<WebElement> listMenu;

@CacheLookup
    @FindBy(xpath = "//ul[@class='uhf-menu']//li[1]//div[@class='uhf-child-menu']//li//a")
    List<WebElement> searchCars;

    public void mouseHoverOnTopMenuList(String selectMenuItem){

        for (WebElement menu:listMenu) {
            if(menu.getText().equalsIgnoreCase(selectMenuItem)){
                mouseHoverToElement(menu);

                System.out.println(menu.getText());
                break;
            }
            log.info("mouse Hover On Buy And Sell " + menu.toString());

        }
    }

    public void selectFromSubMenuBuyList(String selectMenuBuyList){
        for (WebElement menu:searchCars) {
            if(menu.getText().equalsIgnoreCase(selectMenuBuyList)){
                clickOnElement(menu);

                break;
            }
            log.info("search the cars from list" + menu.toString());
        }
    }

}


