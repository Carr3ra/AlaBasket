package com.JayCee.AlaBasket;

import android.os.Bundle;
import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

public class AlaBasket extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 3750);
    }
}