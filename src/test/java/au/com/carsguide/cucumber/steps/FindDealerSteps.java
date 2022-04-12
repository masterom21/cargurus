package au.com.carsguide.cucumber.steps;

import au.com.carsguide.pages.CarDealersPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;

/**
 * By Bhoomi
 **/
public class FindDealerSteps {
    @And("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String dealerName)  {
        new CarDealersPage().findDealer(dealerName);

    }

    @And("^I click on Page \"([^\"]*)\"$")
    public void iClickOnPage(String page) {
        new CarDealersPage().clickOnPage(page);

    }
}
