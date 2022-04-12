package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * By Bhoomi
 **/
public class NewAndUsedCarSearchPage extends Utility {

    public NewAndUsedCarSearchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[contains(@class,'heading main-heading')]//h1")
    WebElement veryTxt;
    @CacheLookup
    @FindBy(id = "search-submit")
    WebElement submitBtn;
    @CacheLookup
    @FindBy(id = "makes")
    WebElement makes;
    @CacheLookup
    @FindBy(id = "models")
    WebElement models;
    @CacheLookup
    @FindBy(id = "locations")
    WebElement locations;
    @CacheLookup
    @FindBy(id = "priceTo")
    WebElement priceTo;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement makeVerify;


    //Methods
    public String navigateToNewAndUsedCarTxt(String text) {

        return getTextFromElement(veryTxt);
    }

    public void selectMake(String make) {
        selectByVisibleTextFromDropDown(makes, make);
    }

    public void selectModel(String model) {
        selectByVisibleTextFromDropDown(models, model);
    }

    public void selectLocation(String location) {
        selectByVisibleTextFromDropDown(locations, location);
    }

    public void selectPrices(String value) {
        selectByVisibleTextFromDropDown(priceTo, value);
    }

    public void clickOnFindMYCar() {
        clickOnElement(submitBtn);
    }

    public Boolean setMakeVerify(String make) {
        System.out.println(makeVerify.getText());
        System.out.println(makeVerify.getText().contains(make));
        return makeVerify.getText().contains(make);
    }


}


