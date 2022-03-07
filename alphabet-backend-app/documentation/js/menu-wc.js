'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">alphabet-backend-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AlphabetModule.html" data-type="entity-link" >AlphabetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AlphabetModule-8d377661152a1832e359d250d3957712f2aec1e8b716f73ee6a2e09970ffe78ec0b28ed8c3b3a034be610c9176ce40fa6b596703c4ddd2651a7bd5e576319c94"' : 'data-target="#xs-controllers-links-module-AlphabetModule-8d377661152a1832e359d250d3957712f2aec1e8b716f73ee6a2e09970ffe78ec0b28ed8c3b3a034be610c9176ce40fa6b596703c4ddd2651a7bd5e576319c94"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AlphabetModule-8d377661152a1832e359d250d3957712f2aec1e8b716f73ee6a2e09970ffe78ec0b28ed8c3b3a034be610c9176ce40fa6b596703c4ddd2651a7bd5e576319c94"' :
                                            'id="xs-controllers-links-module-AlphabetModule-8d377661152a1832e359d250d3957712f2aec1e8b716f73ee6a2e09970ffe78ec0b28ed8c3b3a034be610c9176ce40fa6b596703c4ddd2651a7bd5e576319c94"' }>
                                            <li class="link">
                                                <a href="controllers/AlphabetController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlphabetController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AlphabetModule-8d377661152a1832e359d250d3957712f2aec1e8b716f73ee6a2e09970ffe78ec0b28ed8c3b3a034be610c9176ce40fa6b596703c4ddd2651a7bd5e576319c94"' : 'data-target="#xs-injectables-links-module-AlphabetModule-8d377661152a1832e359d250d3957712f2aec1e8b716f73ee6a2e09970ffe78ec0b28ed8c3b3a034be610c9176ce40fa6b596703c4ddd2651a7bd5e576319c94"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AlphabetModule-8d377661152a1832e359d250d3957712f2aec1e8b716f73ee6a2e09970ffe78ec0b28ed8c3b3a034be610c9176ce40fa6b596703c4ddd2651a7bd5e576319c94"' :
                                        'id="xs-injectables-links-module-AlphabetModule-8d377661152a1832e359d250d3957712f2aec1e8b716f73ee6a2e09970ffe78ec0b28ed8c3b3a034be610c9176ce40fa6b596703c4ddd2651a7bd5e576319c94"' }>
                                        <li class="link">
                                            <a href="injectables/AlphabetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlphabetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-929aed4cd48d156655132529b3084749424438f554f59a255c10a24e5a84ab21703a99aa2ba0d338ef1a9630b861dbb3a12a41d93154a9529518d9d11f60c677"' : 'data-target="#xs-controllers-links-module-AppModule-929aed4cd48d156655132529b3084749424438f554f59a255c10a24e5a84ab21703a99aa2ba0d338ef1a9630b861dbb3a12a41d93154a9529518d9d11f60c677"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-929aed4cd48d156655132529b3084749424438f554f59a255c10a24e5a84ab21703a99aa2ba0d338ef1a9630b861dbb3a12a41d93154a9529518d9d11f60c677"' :
                                            'id="xs-controllers-links-module-AppModule-929aed4cd48d156655132529b3084749424438f554f59a255c10a24e5a84ab21703a99aa2ba0d338ef1a9630b861dbb3a12a41d93154a9529518d9d11f60c677"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-929aed4cd48d156655132529b3084749424438f554f59a255c10a24e5a84ab21703a99aa2ba0d338ef1a9630b861dbb3a12a41d93154a9529518d9d11f60c677"' : 'data-target="#xs-injectables-links-module-AppModule-929aed4cd48d156655132529b3084749424438f554f59a255c10a24e5a84ab21703a99aa2ba0d338ef1a9630b861dbb3a12a41d93154a9529518d9d11f60c677"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-929aed4cd48d156655132529b3084749424438f554f59a255c10a24e5a84ab21703a99aa2ba0d338ef1a9630b861dbb3a12a41d93154a9529518d9d11f60c677"' :
                                        'id="xs-injectables-links-module-AppModule-929aed4cd48d156655132529b3084749424438f554f59a255c10a24e5a84ab21703a99aa2ba0d338ef1a9630b861dbb3a12a41d93154a9529518d9d11f60c677"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AlphabetController.html" data-type="entity-link" >AlphabetController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Alphabet.html" data-type="entity-link" >Alphabet</a>
                            </li>
                            <li class="link">
                                <a href="classes/Logger.html" data-type="entity-link" >Logger</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlphabetService.html" data-type="entity-link" >AlphabetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SwaggerConfig.html" data-type="entity-link" >SwaggerConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});