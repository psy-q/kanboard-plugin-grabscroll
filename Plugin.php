<?php

namespace Kanboard\Plugin\GrabScroll;

use Kanboard\Core\Plugin\Base;

class Plugin extends Base
{
    public function initialize()
    {
        $this->hook->on('template:layout:js', array('template' => 'plugins/GrabScroll/Assets/scroll.js'));
    }

    public function onStartup()
    {
    }

    public function getPluginName()
    {
        return 'GrabScroll';
    }

    public function getPluginDescription()
    {
        return t('Scroll a board horizontally by grabbing it.');
    }

    public function getPluginAuthor()
    {
        return 'Ramón Cahenzli with code by ToddWebDev';
    }

    public function getPluginVersion()
    {
        return '0.2.1';
    }

    public function getPluginHomepage()
    {
        return 'https://github.com/psy-q/kanboard-plugin-grabscroll';
    }

    public function getCompatibleVersion()
    {
        return '>1.2.9';
    }
}
