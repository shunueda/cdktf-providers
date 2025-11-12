// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#addcookieflags Appfwprofile#addcookieflags}
  */
  readonly addcookieflags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#apispec Appfwprofile#apispec}
  */
  readonly apispec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#archivename Appfwprofile#archivename}
  */
  readonly archivename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#as_prof_bypass_list_enable Appfwprofile#as_prof_bypass_list_enable}
  */
  readonly asProfBypassListEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#as_prof_deny_list_enable Appfwprofile#as_prof_deny_list_enable}
  */
  readonly asProfDenyListEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#augment Appfwprofile#augment}
  */
  readonly augment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#blockkeywordaction Appfwprofile#blockkeywordaction}
  */
  readonly blockkeywordaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#bufferoverflowaction Appfwprofile#bufferoverflowaction}
  */
  readonly bufferoverflowaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#bufferoverflowmaxcookielength Appfwprofile#bufferoverflowmaxcookielength}
  */
  readonly bufferoverflowmaxcookielength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#bufferoverflowmaxheaderlength Appfwprofile#bufferoverflowmaxheaderlength}
  */
  readonly bufferoverflowmaxheaderlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#bufferoverflowmaxquerylength Appfwprofile#bufferoverflowmaxquerylength}
  */
  readonly bufferoverflowmaxquerylength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#bufferoverflowmaxtotalheaderlength Appfwprofile#bufferoverflowmaxtotalheaderlength}
  */
  readonly bufferoverflowmaxtotalheaderlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#bufferoverflowmaxurllength Appfwprofile#bufferoverflowmaxurllength}
  */
  readonly bufferoverflowmaxurllength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#canonicalizehtmlresponse Appfwprofile#canonicalizehtmlresponse}
  */
  readonly canonicalizehtmlresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#ceflogging Appfwprofile#ceflogging}
  */
  readonly ceflogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#checkrequestheaders Appfwprofile#checkrequestheaders}
  */
  readonly checkrequestheaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#clientipexpression Appfwprofile#clientipexpression}
  */
  readonly clientipexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cmdinjectionaction Appfwprofile#cmdinjectionaction}
  */
  readonly cmdinjectionaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cmdinjectiongrammar Appfwprofile#cmdinjectiongrammar}
  */
  readonly cmdinjectiongrammar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cmdinjectiontype Appfwprofile#cmdinjectiontype}
  */
  readonly cmdinjectiontype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#comment Appfwprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#contenttypeaction Appfwprofile#contenttypeaction}
  */
  readonly contenttypeaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cookieconsistencyaction Appfwprofile#cookieconsistencyaction}
  */
  readonly cookieconsistencyaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cookieencryption Appfwprofile#cookieencryption}
  */
  readonly cookieencryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cookiehijackingaction Appfwprofile#cookiehijackingaction}
  */
  readonly cookiehijackingaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cookieproxying Appfwprofile#cookieproxying}
  */
  readonly cookieproxying?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cookiesamesiteattribute Appfwprofile#cookiesamesiteattribute}
  */
  readonly cookiesamesiteattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#cookietransforms Appfwprofile#cookietransforms}
  */
  readonly cookietransforms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#creditcard Appfwprofile#creditcard}
  */
  readonly creditcard?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#creditcardaction Appfwprofile#creditcardaction}
  */
  readonly creditcardaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#creditcardmaxallowed Appfwprofile#creditcardmaxallowed}
  */
  readonly creditcardmaxallowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#creditcardxout Appfwprofile#creditcardxout}
  */
  readonly creditcardxout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#crosssitescriptingaction Appfwprofile#crosssitescriptingaction}
  */
  readonly crosssitescriptingaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#crosssitescriptingcheckcompleteurls Appfwprofile#crosssitescriptingcheckcompleteurls}
  */
  readonly crosssitescriptingcheckcompleteurls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#crosssitescriptingtransformunsafehtml Appfwprofile#crosssitescriptingtransformunsafehtml}
  */
  readonly crosssitescriptingtransformunsafehtml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#csrftagaction Appfwprofile#csrftagaction}
  */
  readonly csrftagaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#customsettings Appfwprofile#customsettings}
  */
  readonly customsettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#defaultcharset Appfwprofile#defaultcharset}
  */
  readonly defaultcharset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#defaultfieldformatmaxlength Appfwprofile#defaultfieldformatmaxlength}
  */
  readonly defaultfieldformatmaxlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#defaultfieldformatmaxoccurrences Appfwprofile#defaultfieldformatmaxoccurrences}
  */
  readonly defaultfieldformatmaxoccurrences?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#defaultfieldformatminlength Appfwprofile#defaultfieldformatminlength}
  */
  readonly defaultfieldformatminlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#defaultfieldformattype Appfwprofile#defaultfieldformattype}
  */
  readonly defaultfieldformattype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#defaults Appfwprofile#defaults}
  */
  readonly defaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#denyurlaction Appfwprofile#denyurlaction}
  */
  readonly denyurlaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#dosecurecreditcardlogging Appfwprofile#dosecurecreditcardlogging}
  */
  readonly dosecurecreditcardlogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#dynamiclearning Appfwprofile#dynamiclearning}
  */
  readonly dynamiclearning?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#enableformtagging Appfwprofile#enableformtagging}
  */
  readonly enableformtagging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#errorurl Appfwprofile#errorurl}
  */
  readonly errorurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#excludefileuploadfromchecks Appfwprofile#excludefileuploadfromchecks}
  */
  readonly excludefileuploadfromchecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#exemptclosureurlsfromsecuritychecks Appfwprofile#exemptclosureurlsfromsecuritychecks}
  */
  readonly exemptclosureurlsfromsecuritychecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#fakeaccountdetection Appfwprofile#fakeaccountdetection}
  */
  readonly fakeaccountdetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#fieldconsistencyaction Appfwprofile#fieldconsistencyaction}
  */
  readonly fieldconsistencyaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#fieldformataction Appfwprofile#fieldformataction}
  */
  readonly fieldformataction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#fieldscan Appfwprofile#fieldscan}
  */
  readonly fieldscan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#fieldscanlimit Appfwprofile#fieldscanlimit}
  */
  readonly fieldscanlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#fileuploadmaxnum Appfwprofile#fileuploadmaxnum}
  */
  readonly fileuploadmaxnum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#fileuploadtypesaction Appfwprofile#fileuploadtypesaction}
  */
  readonly fileuploadtypesaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#geolocationlogging Appfwprofile#geolocationlogging}
  */
  readonly geolocationlogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#grpcaction Appfwprofile#grpcaction}
  */
  readonly grpcaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#htmlerrorobject Appfwprofile#htmlerrorobject}
  */
  readonly htmlerrorobject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#htmlerrorstatuscode Appfwprofile#htmlerrorstatuscode}
  */
  readonly htmlerrorstatuscode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#htmlerrorstatusmessage Appfwprofile#htmlerrorstatusmessage}
  */
  readonly htmlerrorstatusmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#id Appfwprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#importprofilename Appfwprofile#importprofilename}
  */
  readonly importprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#infercontenttypexmlpayloadaction Appfwprofile#infercontenttypexmlpayloadaction}
  */
  readonly infercontenttypexmlpayloadaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#insertcookiesamesiteattribute Appfwprofile#insertcookiesamesiteattribute}
  */
  readonly insertcookiesamesiteattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#inspectcontenttypes Appfwprofile#inspectcontenttypes}
  */
  readonly inspectcontenttypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#inspectquerycontenttypes Appfwprofile#inspectquerycontenttypes}
  */
  readonly inspectquerycontenttypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#invalidpercenthandling Appfwprofile#invalidpercenthandling}
  */
  readonly invalidpercenthandling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonblockkeywordaction Appfwprofile#jsonblockkeywordaction}
  */
  readonly jsonblockkeywordaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsoncmdinjectionaction Appfwprofile#jsoncmdinjectionaction}
  */
  readonly jsoncmdinjectionaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsoncmdinjectiongrammar Appfwprofile#jsoncmdinjectiongrammar}
  */
  readonly jsoncmdinjectiongrammar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsoncmdinjectiontype Appfwprofile#jsoncmdinjectiontype}
  */
  readonly jsoncmdinjectiontype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsondosaction Appfwprofile#jsondosaction}
  */
  readonly jsondosaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonerrorobject Appfwprofile#jsonerrorobject}
  */
  readonly jsonerrorobject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonerrorstatuscode Appfwprofile#jsonerrorstatuscode}
  */
  readonly jsonerrorstatuscode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonerrorstatusmessage Appfwprofile#jsonerrorstatusmessage}
  */
  readonly jsonerrorstatusmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonfieldscan Appfwprofile#jsonfieldscan}
  */
  readonly jsonfieldscan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonfieldscanlimit Appfwprofile#jsonfieldscanlimit}
  */
  readonly jsonfieldscanlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonmessagescan Appfwprofile#jsonmessagescan}
  */
  readonly jsonmessagescan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonmessagescanlimit Appfwprofile#jsonmessagescanlimit}
  */
  readonly jsonmessagescanlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonsqlinjectionaction Appfwprofile#jsonsqlinjectionaction}
  */
  readonly jsonsqlinjectionaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonsqlinjectiongrammar Appfwprofile#jsonsqlinjectiongrammar}
  */
  readonly jsonsqlinjectiongrammar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonsqlinjectiontype Appfwprofile#jsonsqlinjectiontype}
  */
  readonly jsonsqlinjectiontype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#jsonxssaction Appfwprofile#jsonxssaction}
  */
  readonly jsonxssaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#logeverypolicyhit Appfwprofile#logeverypolicyhit}
  */
  readonly logeverypolicyhit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#matchurlstring Appfwprofile#matchurlstring}
  */
  readonly matchurlstring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#messagescan Appfwprofile#messagescan}
  */
  readonly messagescan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#messagescanlimit Appfwprofile#messagescanlimit}
  */
  readonly messagescanlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#messagescanlimitcontenttypes Appfwprofile#messagescanlimitcontenttypes}
  */
  readonly messagescanlimitcontenttypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#multipleheaderaction Appfwprofile#multipleheaderaction}
  */
  readonly multipleheaderaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#name Appfwprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#optimizepartialreqs Appfwprofile#optimizepartialreqs}
  */
  readonly optimizepartialreqs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#overwrite Appfwprofile#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#percentdecoderecursively Appfwprofile#percentdecoderecursively}
  */
  readonly percentdecoderecursively?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#postbodylimit Appfwprofile#postbodylimit}
  */
  readonly postbodylimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#postbodylimitaction Appfwprofile#postbodylimitaction}
  */
  readonly postbodylimitaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#postbodylimitsignature Appfwprofile#postbodylimitsignature}
  */
  readonly postbodylimitsignature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#protofileobject Appfwprofile#protofileobject}
  */
  readonly protofileobject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#refererheadercheck Appfwprofile#refererheadercheck}
  */
  readonly refererheadercheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#relaxationrules Appfwprofile#relaxationrules}
  */
  readonly relaxationrules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#replaceurlstring Appfwprofile#replaceurlstring}
  */
  readonly replaceurlstring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#requestcontenttype Appfwprofile#requestcontenttype}
  */
  readonly requestcontenttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#responsecontenttype Appfwprofile#responsecontenttype}
  */
  readonly responsecontenttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#restaction Appfwprofile#restaction}
  */
  readonly restaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#rfcprofile Appfwprofile#rfcprofile}
  */
  readonly rfcprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#semicolonfieldseparator Appfwprofile#semicolonfieldseparator}
  */
  readonly semicolonfieldseparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sessioncookiename Appfwprofile#sessioncookiename}
  */
  readonly sessioncookiename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sessionlessfieldconsistency Appfwprofile#sessionlessfieldconsistency}
  */
  readonly sessionlessfieldconsistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sessionlessurlclosure Appfwprofile#sessionlessurlclosure}
  */
  readonly sessionlessurlclosure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#signatures Appfwprofile#signatures}
  */
  readonly signatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sqlinjectionaction Appfwprofile#sqlinjectionaction}
  */
  readonly sqlinjectionaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sqlinjectionchecksqlwildchars Appfwprofile#sqlinjectionchecksqlwildchars}
  */
  readonly sqlinjectionchecksqlwildchars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sqlinjectiongrammar Appfwprofile#sqlinjectiongrammar}
  */
  readonly sqlinjectiongrammar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sqlinjectiononlycheckfieldswithsqlchars Appfwprofile#sqlinjectiononlycheckfieldswithsqlchars}
  */
  readonly sqlinjectiononlycheckfieldswithsqlchars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sqlinjectionparsecomments Appfwprofile#sqlinjectionparsecomments}
  */
  readonly sqlinjectionparsecomments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sqlinjectionruletype Appfwprofile#sqlinjectionruletype}
  */
  readonly sqlinjectionruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sqlinjectiontransformspecialchars Appfwprofile#sqlinjectiontransformspecialchars}
  */
  readonly sqlinjectiontransformspecialchars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#sqlinjectiontype Appfwprofile#sqlinjectiontype}
  */
  readonly sqlinjectiontype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#starturlaction Appfwprofile#starturlaction}
  */
  readonly starturlaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#starturlclosure Appfwprofile#starturlclosure}
  */
  readonly starturlclosure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#streaming Appfwprofile#streaming}
  */
  readonly streaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#stripcomments Appfwprofile#stripcomments}
  */
  readonly stripcomments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#striphtmlcomments Appfwprofile#striphtmlcomments}
  */
  readonly striphtmlcomments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#stripxmlcomments Appfwprofile#stripxmlcomments}
  */
  readonly stripxmlcomments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#trace Appfwprofile#trace}
  */
  readonly trace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#type Appfwprofile#type}
  */
  readonly type?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#urldecoderequestcookies Appfwprofile#urldecoderequestcookies}
  */
  readonly urldecoderequestcookies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#usehtmlerrorobject Appfwprofile#usehtmlerrorobject}
  */
  readonly usehtmlerrorobject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#verboseloglevel Appfwprofile#verboseloglevel}
  */
  readonly verboseloglevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlattachmentaction Appfwprofile#xmlattachmentaction}
  */
  readonly xmlattachmentaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmldosaction Appfwprofile#xmldosaction}
  */
  readonly xmldosaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlerrorobject Appfwprofile#xmlerrorobject}
  */
  readonly xmlerrorobject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlerrorstatuscode Appfwprofile#xmlerrorstatuscode}
  */
  readonly xmlerrorstatuscode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlerrorstatusmessage Appfwprofile#xmlerrorstatusmessage}
  */
  readonly xmlerrorstatusmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlformataction Appfwprofile#xmlformataction}
  */
  readonly xmlformataction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlsoapfaultaction Appfwprofile#xmlsoapfaultaction}
  */
  readonly xmlsoapfaultaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlsqlinjectionaction Appfwprofile#xmlsqlinjectionaction}
  */
  readonly xmlsqlinjectionaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlsqlinjectionchecksqlwildchars Appfwprofile#xmlsqlinjectionchecksqlwildchars}
  */
  readonly xmlsqlinjectionchecksqlwildchars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlsqlinjectiononlycheckfieldswithsqlchars Appfwprofile#xmlsqlinjectiononlycheckfieldswithsqlchars}
  */
  readonly xmlsqlinjectiononlycheckfieldswithsqlchars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlsqlinjectionparsecomments Appfwprofile#xmlsqlinjectionparsecomments}
  */
  readonly xmlsqlinjectionparsecomments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlsqlinjectiontype Appfwprofile#xmlsqlinjectiontype}
  */
  readonly xmlsqlinjectiontype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlvalidationaction Appfwprofile#xmlvalidationaction}
  */
  readonly xmlvalidationaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlwsiaction Appfwprofile#xmlwsiaction}
  */
  readonly xmlwsiaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#xmlxssaction Appfwprofile#xmlxssaction}
  */
  readonly xmlxssaction?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile citrixadc_appfwprofile}
*/
export class Appfwprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwprofile to import
  * @param importFromId The id of the existing Appfwprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile citrixadc_appfwprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addcookieflags = config.addcookieflags;
    this._apispec = config.apispec;
    this._archivename = config.archivename;
    this._asProfBypassListEnable = config.asProfBypassListEnable;
    this._asProfDenyListEnable = config.asProfDenyListEnable;
    this._augment = config.augment;
    this._blockkeywordaction = config.blockkeywordaction;
    this._bufferoverflowaction = config.bufferoverflowaction;
    this._bufferoverflowmaxcookielength = config.bufferoverflowmaxcookielength;
    this._bufferoverflowmaxheaderlength = config.bufferoverflowmaxheaderlength;
    this._bufferoverflowmaxquerylength = config.bufferoverflowmaxquerylength;
    this._bufferoverflowmaxtotalheaderlength = config.bufferoverflowmaxtotalheaderlength;
    this._bufferoverflowmaxurllength = config.bufferoverflowmaxurllength;
    this._canonicalizehtmlresponse = config.canonicalizehtmlresponse;
    this._ceflogging = config.ceflogging;
    this._checkrequestheaders = config.checkrequestheaders;
    this._clientipexpression = config.clientipexpression;
    this._cmdinjectionaction = config.cmdinjectionaction;
    this._cmdinjectiongrammar = config.cmdinjectiongrammar;
    this._cmdinjectiontype = config.cmdinjectiontype;
    this._comment = config.comment;
    this._contenttypeaction = config.contenttypeaction;
    this._cookieconsistencyaction = config.cookieconsistencyaction;
    this._cookieencryption = config.cookieencryption;
    this._cookiehijackingaction = config.cookiehijackingaction;
    this._cookieproxying = config.cookieproxying;
    this._cookiesamesiteattribute = config.cookiesamesiteattribute;
    this._cookietransforms = config.cookietransforms;
    this._creditcard = config.creditcard;
    this._creditcardaction = config.creditcardaction;
    this._creditcardmaxallowed = config.creditcardmaxallowed;
    this._creditcardxout = config.creditcardxout;
    this._crosssitescriptingaction = config.crosssitescriptingaction;
    this._crosssitescriptingcheckcompleteurls = config.crosssitescriptingcheckcompleteurls;
    this._crosssitescriptingtransformunsafehtml = config.crosssitescriptingtransformunsafehtml;
    this._csrftagaction = config.csrftagaction;
    this._customsettings = config.customsettings;
    this._defaultcharset = config.defaultcharset;
    this._defaultfieldformatmaxlength = config.defaultfieldformatmaxlength;
    this._defaultfieldformatmaxoccurrences = config.defaultfieldformatmaxoccurrences;
    this._defaultfieldformatminlength = config.defaultfieldformatminlength;
    this._defaultfieldformattype = config.defaultfieldformattype;
    this._defaults = config.defaults;
    this._denyurlaction = config.denyurlaction;
    this._dosecurecreditcardlogging = config.dosecurecreditcardlogging;
    this._dynamiclearning = config.dynamiclearning;
    this._enableformtagging = config.enableformtagging;
    this._errorurl = config.errorurl;
    this._excludefileuploadfromchecks = config.excludefileuploadfromchecks;
    this._exemptclosureurlsfromsecuritychecks = config.exemptclosureurlsfromsecuritychecks;
    this._fakeaccountdetection = config.fakeaccountdetection;
    this._fieldconsistencyaction = config.fieldconsistencyaction;
    this._fieldformataction = config.fieldformataction;
    this._fieldscan = config.fieldscan;
    this._fieldscanlimit = config.fieldscanlimit;
    this._fileuploadmaxnum = config.fileuploadmaxnum;
    this._fileuploadtypesaction = config.fileuploadtypesaction;
    this._geolocationlogging = config.geolocationlogging;
    this._grpcaction = config.grpcaction;
    this._htmlerrorobject = config.htmlerrorobject;
    this._htmlerrorstatuscode = config.htmlerrorstatuscode;
    this._htmlerrorstatusmessage = config.htmlerrorstatusmessage;
    this._id = config.id;
    this._importprofilename = config.importprofilename;
    this._infercontenttypexmlpayloadaction = config.infercontenttypexmlpayloadaction;
    this._insertcookiesamesiteattribute = config.insertcookiesamesiteattribute;
    this._inspectcontenttypes = config.inspectcontenttypes;
    this._inspectquerycontenttypes = config.inspectquerycontenttypes;
    this._invalidpercenthandling = config.invalidpercenthandling;
    this._jsonblockkeywordaction = config.jsonblockkeywordaction;
    this._jsoncmdinjectionaction = config.jsoncmdinjectionaction;
    this._jsoncmdinjectiongrammar = config.jsoncmdinjectiongrammar;
    this._jsoncmdinjectiontype = config.jsoncmdinjectiontype;
    this._jsondosaction = config.jsondosaction;
    this._jsonerrorobject = config.jsonerrorobject;
    this._jsonerrorstatuscode = config.jsonerrorstatuscode;
    this._jsonerrorstatusmessage = config.jsonerrorstatusmessage;
    this._jsonfieldscan = config.jsonfieldscan;
    this._jsonfieldscanlimit = config.jsonfieldscanlimit;
    this._jsonmessagescan = config.jsonmessagescan;
    this._jsonmessagescanlimit = config.jsonmessagescanlimit;
    this._jsonsqlinjectionaction = config.jsonsqlinjectionaction;
    this._jsonsqlinjectiongrammar = config.jsonsqlinjectiongrammar;
    this._jsonsqlinjectiontype = config.jsonsqlinjectiontype;
    this._jsonxssaction = config.jsonxssaction;
    this._logeverypolicyhit = config.logeverypolicyhit;
    this._matchurlstring = config.matchurlstring;
    this._messagescan = config.messagescan;
    this._messagescanlimit = config.messagescanlimit;
    this._messagescanlimitcontenttypes = config.messagescanlimitcontenttypes;
    this._multipleheaderaction = config.multipleheaderaction;
    this._name = config.name;
    this._optimizepartialreqs = config.optimizepartialreqs;
    this._overwrite = config.overwrite;
    this._percentdecoderecursively = config.percentdecoderecursively;
    this._postbodylimit = config.postbodylimit;
    this._postbodylimitaction = config.postbodylimitaction;
    this._postbodylimitsignature = config.postbodylimitsignature;
    this._protofileobject = config.protofileobject;
    this._refererheadercheck = config.refererheadercheck;
    this._relaxationrules = config.relaxationrules;
    this._replaceurlstring = config.replaceurlstring;
    this._requestcontenttype = config.requestcontenttype;
    this._responsecontenttype = config.responsecontenttype;
    this._restaction = config.restaction;
    this._rfcprofile = config.rfcprofile;
    this._semicolonfieldseparator = config.semicolonfieldseparator;
    this._sessioncookiename = config.sessioncookiename;
    this._sessionlessfieldconsistency = config.sessionlessfieldconsistency;
    this._sessionlessurlclosure = config.sessionlessurlclosure;
    this._signatures = config.signatures;
    this._sqlinjectionaction = config.sqlinjectionaction;
    this._sqlinjectionchecksqlwildchars = config.sqlinjectionchecksqlwildchars;
    this._sqlinjectiongrammar = config.sqlinjectiongrammar;
    this._sqlinjectiononlycheckfieldswithsqlchars = config.sqlinjectiononlycheckfieldswithsqlchars;
    this._sqlinjectionparsecomments = config.sqlinjectionparsecomments;
    this._sqlinjectionruletype = config.sqlinjectionruletype;
    this._sqlinjectiontransformspecialchars = config.sqlinjectiontransformspecialchars;
    this._sqlinjectiontype = config.sqlinjectiontype;
    this._starturlaction = config.starturlaction;
    this._starturlclosure = config.starturlclosure;
    this._streaming = config.streaming;
    this._stripcomments = config.stripcomments;
    this._striphtmlcomments = config.striphtmlcomments;
    this._stripxmlcomments = config.stripxmlcomments;
    this._trace = config.trace;
    this._type = config.type;
    this._urldecoderequestcookies = config.urldecoderequestcookies;
    this._usehtmlerrorobject = config.usehtmlerrorobject;
    this._verboseloglevel = config.verboseloglevel;
    this._xmlattachmentaction = config.xmlattachmentaction;
    this._xmldosaction = config.xmldosaction;
    this._xmlerrorobject = config.xmlerrorobject;
    this._xmlerrorstatuscode = config.xmlerrorstatuscode;
    this._xmlerrorstatusmessage = config.xmlerrorstatusmessage;
    this._xmlformataction = config.xmlformataction;
    this._xmlsoapfaultaction = config.xmlsoapfaultaction;
    this._xmlsqlinjectionaction = config.xmlsqlinjectionaction;
    this._xmlsqlinjectionchecksqlwildchars = config.xmlsqlinjectionchecksqlwildchars;
    this._xmlsqlinjectiononlycheckfieldswithsqlchars = config.xmlsqlinjectiononlycheckfieldswithsqlchars;
    this._xmlsqlinjectionparsecomments = config.xmlsqlinjectionparsecomments;
    this._xmlsqlinjectiontype = config.xmlsqlinjectiontype;
    this._xmlvalidationaction = config.xmlvalidationaction;
    this._xmlwsiaction = config.xmlwsiaction;
    this._xmlxssaction = config.xmlxssaction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addcookieflags - computed: true, optional: true, required: false
  private _addcookieflags?: string; 
  public get addcookieflags() {
    return this.getStringAttribute('addcookieflags');
  }
  public set addcookieflags(value: string) {
    this._addcookieflags = value;
  }
  public resetAddcookieflags() {
    this._addcookieflags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addcookieflagsInput() {
    return this._addcookieflags;
  }

  // apispec - computed: true, optional: true, required: false
  private _apispec?: string; 
  public get apispec() {
    return this.getStringAttribute('apispec');
  }
  public set apispec(value: string) {
    this._apispec = value;
  }
  public resetApispec() {
    this._apispec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apispecInput() {
    return this._apispec;
  }

  // archivename - computed: true, optional: true, required: false
  private _archivename?: string; 
  public get archivename() {
    return this.getStringAttribute('archivename');
  }
  public set archivename(value: string) {
    this._archivename = value;
  }
  public resetArchivename() {
    this._archivename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivenameInput() {
    return this._archivename;
  }

  // as_prof_bypass_list_enable - computed: true, optional: true, required: false
  private _asProfBypassListEnable?: string; 
  public get asProfBypassListEnable() {
    return this.getStringAttribute('as_prof_bypass_list_enable');
  }
  public set asProfBypassListEnable(value: string) {
    this._asProfBypassListEnable = value;
  }
  public resetAsProfBypassListEnable() {
    this._asProfBypassListEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asProfBypassListEnableInput() {
    return this._asProfBypassListEnable;
  }

  // as_prof_deny_list_enable - computed: true, optional: true, required: false
  private _asProfDenyListEnable?: string; 
  public get asProfDenyListEnable() {
    return this.getStringAttribute('as_prof_deny_list_enable');
  }
  public set asProfDenyListEnable(value: string) {
    this._asProfDenyListEnable = value;
  }
  public resetAsProfDenyListEnable() {
    this._asProfDenyListEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asProfDenyListEnableInput() {
    return this._asProfDenyListEnable;
  }

  // augment - computed: true, optional: true, required: false
  private _augment?: boolean | cdktf.IResolvable; 
  public get augment() {
    return this.getBooleanAttribute('augment');
  }
  public set augment(value: boolean | cdktf.IResolvable) {
    this._augment = value;
  }
  public resetAugment() {
    this._augment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get augmentInput() {
    return this._augment;
  }

  // blockkeywordaction - computed: true, optional: true, required: false
  private _blockkeywordaction?: string[]; 
  public get blockkeywordaction() {
    return cdktf.Fn.tolist(this.getListAttribute('blockkeywordaction'));
  }
  public set blockkeywordaction(value: string[]) {
    this._blockkeywordaction = value;
  }
  public resetBlockkeywordaction() {
    this._blockkeywordaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockkeywordactionInput() {
    return this._blockkeywordaction;
  }

  // bufferoverflowaction - computed: true, optional: true, required: false
  private _bufferoverflowaction?: string[]; 
  public get bufferoverflowaction() {
    return cdktf.Fn.tolist(this.getListAttribute('bufferoverflowaction'));
  }
  public set bufferoverflowaction(value: string[]) {
    this._bufferoverflowaction = value;
  }
  public resetBufferoverflowaction() {
    this._bufferoverflowaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferoverflowactionInput() {
    return this._bufferoverflowaction;
  }

  // bufferoverflowmaxcookielength - computed: true, optional: true, required: false
  private _bufferoverflowmaxcookielength?: number; 
  public get bufferoverflowmaxcookielength() {
    return this.getNumberAttribute('bufferoverflowmaxcookielength');
  }
  public set bufferoverflowmaxcookielength(value: number) {
    this._bufferoverflowmaxcookielength = value;
  }
  public resetBufferoverflowmaxcookielength() {
    this._bufferoverflowmaxcookielength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferoverflowmaxcookielengthInput() {
    return this._bufferoverflowmaxcookielength;
  }

  // bufferoverflowmaxheaderlength - computed: true, optional: true, required: false
  private _bufferoverflowmaxheaderlength?: number; 
  public get bufferoverflowmaxheaderlength() {
    return this.getNumberAttribute('bufferoverflowmaxheaderlength');
  }
  public set bufferoverflowmaxheaderlength(value: number) {
    this._bufferoverflowmaxheaderlength = value;
  }
  public resetBufferoverflowmaxheaderlength() {
    this._bufferoverflowmaxheaderlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferoverflowmaxheaderlengthInput() {
    return this._bufferoverflowmaxheaderlength;
  }

  // bufferoverflowmaxquerylength - computed: true, optional: true, required: false
  private _bufferoverflowmaxquerylength?: number; 
  public get bufferoverflowmaxquerylength() {
    return this.getNumberAttribute('bufferoverflowmaxquerylength');
  }
  public set bufferoverflowmaxquerylength(value: number) {
    this._bufferoverflowmaxquerylength = value;
  }
  public resetBufferoverflowmaxquerylength() {
    this._bufferoverflowmaxquerylength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferoverflowmaxquerylengthInput() {
    return this._bufferoverflowmaxquerylength;
  }

  // bufferoverflowmaxtotalheaderlength - computed: true, optional: true, required: false
  private _bufferoverflowmaxtotalheaderlength?: number; 
  public get bufferoverflowmaxtotalheaderlength() {
    return this.getNumberAttribute('bufferoverflowmaxtotalheaderlength');
  }
  public set bufferoverflowmaxtotalheaderlength(value: number) {
    this._bufferoverflowmaxtotalheaderlength = value;
  }
  public resetBufferoverflowmaxtotalheaderlength() {
    this._bufferoverflowmaxtotalheaderlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferoverflowmaxtotalheaderlengthInput() {
    return this._bufferoverflowmaxtotalheaderlength;
  }

  // bufferoverflowmaxurllength - computed: true, optional: true, required: false
  private _bufferoverflowmaxurllength?: number; 
  public get bufferoverflowmaxurllength() {
    return this.getNumberAttribute('bufferoverflowmaxurllength');
  }
  public set bufferoverflowmaxurllength(value: number) {
    this._bufferoverflowmaxurllength = value;
  }
  public resetBufferoverflowmaxurllength() {
    this._bufferoverflowmaxurllength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferoverflowmaxurllengthInput() {
    return this._bufferoverflowmaxurllength;
  }

  // canonicalizehtmlresponse - computed: true, optional: true, required: false
  private _canonicalizehtmlresponse?: string; 
  public get canonicalizehtmlresponse() {
    return this.getStringAttribute('canonicalizehtmlresponse');
  }
  public set canonicalizehtmlresponse(value: string) {
    this._canonicalizehtmlresponse = value;
  }
  public resetCanonicalizehtmlresponse() {
    this._canonicalizehtmlresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalizehtmlresponseInput() {
    return this._canonicalizehtmlresponse;
  }

  // ceflogging - computed: true, optional: true, required: false
  private _ceflogging?: string; 
  public get ceflogging() {
    return this.getStringAttribute('ceflogging');
  }
  public set ceflogging(value: string) {
    this._ceflogging = value;
  }
  public resetCeflogging() {
    this._ceflogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefloggingInput() {
    return this._ceflogging;
  }

  // checkrequestheaders - computed: true, optional: true, required: false
  private _checkrequestheaders?: string; 
  public get checkrequestheaders() {
    return this.getStringAttribute('checkrequestheaders');
  }
  public set checkrequestheaders(value: string) {
    this._checkrequestheaders = value;
  }
  public resetCheckrequestheaders() {
    this._checkrequestheaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkrequestheadersInput() {
    return this._checkrequestheaders;
  }

  // clientipexpression - computed: true, optional: true, required: false
  private _clientipexpression?: string; 
  public get clientipexpression() {
    return this.getStringAttribute('clientipexpression');
  }
  public set clientipexpression(value: string) {
    this._clientipexpression = value;
  }
  public resetClientipexpression() {
    this._clientipexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientipexpressionInput() {
    return this._clientipexpression;
  }

  // cmdinjectionaction - computed: true, optional: true, required: false
  private _cmdinjectionaction?: string[]; 
  public get cmdinjectionaction() {
    return this.getListAttribute('cmdinjectionaction');
  }
  public set cmdinjectionaction(value: string[]) {
    this._cmdinjectionaction = value;
  }
  public resetCmdinjectionaction() {
    this._cmdinjectionaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdinjectionactionInput() {
    return this._cmdinjectionaction;
  }

  // cmdinjectiongrammar - computed: true, optional: true, required: false
  private _cmdinjectiongrammar?: string; 
  public get cmdinjectiongrammar() {
    return this.getStringAttribute('cmdinjectiongrammar');
  }
  public set cmdinjectiongrammar(value: string) {
    this._cmdinjectiongrammar = value;
  }
  public resetCmdinjectiongrammar() {
    this._cmdinjectiongrammar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdinjectiongrammarInput() {
    return this._cmdinjectiongrammar;
  }

  // cmdinjectiontype - computed: true, optional: true, required: false
  private _cmdinjectiontype?: string; 
  public get cmdinjectiontype() {
    return this.getStringAttribute('cmdinjectiontype');
  }
  public set cmdinjectiontype(value: string) {
    this._cmdinjectiontype = value;
  }
  public resetCmdinjectiontype() {
    this._cmdinjectiontype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdinjectiontypeInput() {
    return this._cmdinjectiontype;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // contenttypeaction - computed: true, optional: true, required: false
  private _contenttypeaction?: string[]; 
  public get contenttypeaction() {
    return cdktf.Fn.tolist(this.getListAttribute('contenttypeaction'));
  }
  public set contenttypeaction(value: string[]) {
    this._contenttypeaction = value;
  }
  public resetContenttypeaction() {
    this._contenttypeaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contenttypeactionInput() {
    return this._contenttypeaction;
  }

  // cookieconsistencyaction - computed: true, optional: true, required: false
  private _cookieconsistencyaction?: string[]; 
  public get cookieconsistencyaction() {
    return cdktf.Fn.tolist(this.getListAttribute('cookieconsistencyaction'));
  }
  public set cookieconsistencyaction(value: string[]) {
    this._cookieconsistencyaction = value;
  }
  public resetCookieconsistencyaction() {
    this._cookieconsistencyaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieconsistencyactionInput() {
    return this._cookieconsistencyaction;
  }

  // cookieencryption - computed: true, optional: true, required: false
  private _cookieencryption?: string; 
  public get cookieencryption() {
    return this.getStringAttribute('cookieencryption');
  }
  public set cookieencryption(value: string) {
    this._cookieencryption = value;
  }
  public resetCookieencryption() {
    this._cookieencryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieencryptionInput() {
    return this._cookieencryption;
  }

  // cookiehijackingaction - computed: true, optional: true, required: false
  private _cookiehijackingaction?: string[]; 
  public get cookiehijackingaction() {
    return this.getListAttribute('cookiehijackingaction');
  }
  public set cookiehijackingaction(value: string[]) {
    this._cookiehijackingaction = value;
  }
  public resetCookiehijackingaction() {
    this._cookiehijackingaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiehijackingactionInput() {
    return this._cookiehijackingaction;
  }

  // cookieproxying - computed: true, optional: true, required: false
  private _cookieproxying?: string; 
  public get cookieproxying() {
    return this.getStringAttribute('cookieproxying');
  }
  public set cookieproxying(value: string) {
    this._cookieproxying = value;
  }
  public resetCookieproxying() {
    this._cookieproxying = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieproxyingInput() {
    return this._cookieproxying;
  }

  // cookiesamesiteattribute - computed: true, optional: true, required: false
  private _cookiesamesiteattribute?: string; 
  public get cookiesamesiteattribute() {
    return this.getStringAttribute('cookiesamesiteattribute');
  }
  public set cookiesamesiteattribute(value: string) {
    this._cookiesamesiteattribute = value;
  }
  public resetCookiesamesiteattribute() {
    this._cookiesamesiteattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesamesiteattributeInput() {
    return this._cookiesamesiteattribute;
  }

  // cookietransforms - computed: true, optional: true, required: false
  private _cookietransforms?: string; 
  public get cookietransforms() {
    return this.getStringAttribute('cookietransforms');
  }
  public set cookietransforms(value: string) {
    this._cookietransforms = value;
  }
  public resetCookietransforms() {
    this._cookietransforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookietransformsInput() {
    return this._cookietransforms;
  }

  // creditcard - computed: true, optional: true, required: false
  private _creditcard?: string[]; 
  public get creditcard() {
    return cdktf.Fn.tolist(this.getListAttribute('creditcard'));
  }
  public set creditcard(value: string[]) {
    this._creditcard = value;
  }
  public resetCreditcard() {
    this._creditcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditcardInput() {
    return this._creditcard;
  }

  // creditcardaction - computed: true, optional: true, required: false
  private _creditcardaction?: string[]; 
  public get creditcardaction() {
    return cdktf.Fn.tolist(this.getListAttribute('creditcardaction'));
  }
  public set creditcardaction(value: string[]) {
    this._creditcardaction = value;
  }
  public resetCreditcardaction() {
    this._creditcardaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditcardactionInput() {
    return this._creditcardaction;
  }

  // creditcardmaxallowed - computed: true, optional: true, required: false
  private _creditcardmaxallowed?: number; 
  public get creditcardmaxallowed() {
    return this.getNumberAttribute('creditcardmaxallowed');
  }
  public set creditcardmaxallowed(value: number) {
    this._creditcardmaxallowed = value;
  }
  public resetCreditcardmaxallowed() {
    this._creditcardmaxallowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditcardmaxallowedInput() {
    return this._creditcardmaxallowed;
  }

  // creditcardxout - computed: true, optional: true, required: false
  private _creditcardxout?: string; 
  public get creditcardxout() {
    return this.getStringAttribute('creditcardxout');
  }
  public set creditcardxout(value: string) {
    this._creditcardxout = value;
  }
  public resetCreditcardxout() {
    this._creditcardxout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditcardxoutInput() {
    return this._creditcardxout;
  }

  // crosssitescriptingaction - computed: true, optional: true, required: false
  private _crosssitescriptingaction?: string[]; 
  public get crosssitescriptingaction() {
    return cdktf.Fn.tolist(this.getListAttribute('crosssitescriptingaction'));
  }
  public set crosssitescriptingaction(value: string[]) {
    this._crosssitescriptingaction = value;
  }
  public resetCrosssitescriptingaction() {
    this._crosssitescriptingaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosssitescriptingactionInput() {
    return this._crosssitescriptingaction;
  }

  // crosssitescriptingcheckcompleteurls - computed: true, optional: true, required: false
  private _crosssitescriptingcheckcompleteurls?: string; 
  public get crosssitescriptingcheckcompleteurls() {
    return this.getStringAttribute('crosssitescriptingcheckcompleteurls');
  }
  public set crosssitescriptingcheckcompleteurls(value: string) {
    this._crosssitescriptingcheckcompleteurls = value;
  }
  public resetCrosssitescriptingcheckcompleteurls() {
    this._crosssitescriptingcheckcompleteurls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosssitescriptingcheckcompleteurlsInput() {
    return this._crosssitescriptingcheckcompleteurls;
  }

  // crosssitescriptingtransformunsafehtml - computed: true, optional: true, required: false
  private _crosssitescriptingtransformunsafehtml?: string; 
  public get crosssitescriptingtransformunsafehtml() {
    return this.getStringAttribute('crosssitescriptingtransformunsafehtml');
  }
  public set crosssitescriptingtransformunsafehtml(value: string) {
    this._crosssitescriptingtransformunsafehtml = value;
  }
  public resetCrosssitescriptingtransformunsafehtml() {
    this._crosssitescriptingtransformunsafehtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosssitescriptingtransformunsafehtmlInput() {
    return this._crosssitescriptingtransformunsafehtml;
  }

  // csrftagaction - computed: true, optional: true, required: false
  private _csrftagaction?: string[]; 
  public get csrftagaction() {
    return cdktf.Fn.tolist(this.getListAttribute('csrftagaction'));
  }
  public set csrftagaction(value: string[]) {
    this._csrftagaction = value;
  }
  public resetCsrftagaction() {
    this._csrftagaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrftagactionInput() {
    return this._csrftagaction;
  }

  // customsettings - computed: true, optional: true, required: false
  private _customsettings?: string; 
  public get customsettings() {
    return this.getStringAttribute('customsettings');
  }
  public set customsettings(value: string) {
    this._customsettings = value;
  }
  public resetCustomsettings() {
    this._customsettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customsettingsInput() {
    return this._customsettings;
  }

  // defaultcharset - computed: true, optional: true, required: false
  private _defaultcharset?: string; 
  public get defaultcharset() {
    return this.getStringAttribute('defaultcharset');
  }
  public set defaultcharset(value: string) {
    this._defaultcharset = value;
  }
  public resetDefaultcharset() {
    this._defaultcharset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultcharsetInput() {
    return this._defaultcharset;
  }

  // defaultfieldformatmaxlength - computed: true, optional: true, required: false
  private _defaultfieldformatmaxlength?: number; 
  public get defaultfieldformatmaxlength() {
    return this.getNumberAttribute('defaultfieldformatmaxlength');
  }
  public set defaultfieldformatmaxlength(value: number) {
    this._defaultfieldformatmaxlength = value;
  }
  public resetDefaultfieldformatmaxlength() {
    this._defaultfieldformatmaxlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultfieldformatmaxlengthInput() {
    return this._defaultfieldformatmaxlength;
  }

  // defaultfieldformatmaxoccurrences - computed: true, optional: true, required: false
  private _defaultfieldformatmaxoccurrences?: number; 
  public get defaultfieldformatmaxoccurrences() {
    return this.getNumberAttribute('defaultfieldformatmaxoccurrences');
  }
  public set defaultfieldformatmaxoccurrences(value: number) {
    this._defaultfieldformatmaxoccurrences = value;
  }
  public resetDefaultfieldformatmaxoccurrences() {
    this._defaultfieldformatmaxoccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultfieldformatmaxoccurrencesInput() {
    return this._defaultfieldformatmaxoccurrences;
  }

  // defaultfieldformatminlength - computed: true, optional: true, required: false
  private _defaultfieldformatminlength?: number; 
  public get defaultfieldformatminlength() {
    return this.getNumberAttribute('defaultfieldformatminlength');
  }
  public set defaultfieldformatminlength(value: number) {
    this._defaultfieldformatminlength = value;
  }
  public resetDefaultfieldformatminlength() {
    this._defaultfieldformatminlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultfieldformatminlengthInput() {
    return this._defaultfieldformatminlength;
  }

  // defaultfieldformattype - computed: true, optional: true, required: false
  private _defaultfieldformattype?: string; 
  public get defaultfieldformattype() {
    return this.getStringAttribute('defaultfieldformattype');
  }
  public set defaultfieldformattype(value: string) {
    this._defaultfieldformattype = value;
  }
  public resetDefaultfieldformattype() {
    this._defaultfieldformattype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultfieldformattypeInput() {
    return this._defaultfieldformattype;
  }

  // defaults - computed: true, optional: true, required: false
  private _defaults?: string; 
  public get defaults() {
    return this.getStringAttribute('defaults');
  }
  public set defaults(value: string) {
    this._defaults = value;
  }
  public resetDefaults() {
    this._defaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults;
  }

  // denyurlaction - computed: true, optional: true, required: false
  private _denyurlaction?: string[]; 
  public get denyurlaction() {
    return cdktf.Fn.tolist(this.getListAttribute('denyurlaction'));
  }
  public set denyurlaction(value: string[]) {
    this._denyurlaction = value;
  }
  public resetDenyurlaction() {
    this._denyurlaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyurlactionInput() {
    return this._denyurlaction;
  }

  // dosecurecreditcardlogging - computed: true, optional: true, required: false
  private _dosecurecreditcardlogging?: string; 
  public get dosecurecreditcardlogging() {
    return this.getStringAttribute('dosecurecreditcardlogging');
  }
  public set dosecurecreditcardlogging(value: string) {
    this._dosecurecreditcardlogging = value;
  }
  public resetDosecurecreditcardlogging() {
    this._dosecurecreditcardlogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosecurecreditcardloggingInput() {
    return this._dosecurecreditcardlogging;
  }

  // dynamiclearning - computed: true, optional: true, required: false
  private _dynamiclearning?: string[]; 
  public get dynamiclearning() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamiclearning'));
  }
  public set dynamiclearning(value: string[]) {
    this._dynamiclearning = value;
  }
  public resetDynamiclearning() {
    this._dynamiclearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamiclearningInput() {
    return this._dynamiclearning;
  }

  // enableformtagging - computed: true, optional: true, required: false
  private _enableformtagging?: string; 
  public get enableformtagging() {
    return this.getStringAttribute('enableformtagging');
  }
  public set enableformtagging(value: string) {
    this._enableformtagging = value;
  }
  public resetEnableformtagging() {
    this._enableformtagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableformtaggingInput() {
    return this._enableformtagging;
  }

  // errorurl - computed: true, optional: true, required: false
  private _errorurl?: string; 
  public get errorurl() {
    return this.getStringAttribute('errorurl');
  }
  public set errorurl(value: string) {
    this._errorurl = value;
  }
  public resetErrorurl() {
    this._errorurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorurlInput() {
    return this._errorurl;
  }

  // excludefileuploadfromchecks - computed: true, optional: true, required: false
  private _excludefileuploadfromchecks?: string; 
  public get excludefileuploadfromchecks() {
    return this.getStringAttribute('excludefileuploadfromchecks');
  }
  public set excludefileuploadfromchecks(value: string) {
    this._excludefileuploadfromchecks = value;
  }
  public resetExcludefileuploadfromchecks() {
    this._excludefileuploadfromchecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludefileuploadfromchecksInput() {
    return this._excludefileuploadfromchecks;
  }

  // exemptclosureurlsfromsecuritychecks - computed: true, optional: true, required: false
  private _exemptclosureurlsfromsecuritychecks?: string; 
  public get exemptclosureurlsfromsecuritychecks() {
    return this.getStringAttribute('exemptclosureurlsfromsecuritychecks');
  }
  public set exemptclosureurlsfromsecuritychecks(value: string) {
    this._exemptclosureurlsfromsecuritychecks = value;
  }
  public resetExemptclosureurlsfromsecuritychecks() {
    this._exemptclosureurlsfromsecuritychecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptclosureurlsfromsecuritychecksInput() {
    return this._exemptclosureurlsfromsecuritychecks;
  }

  // fakeaccountdetection - computed: true, optional: true, required: false
  private _fakeaccountdetection?: string; 
  public get fakeaccountdetection() {
    return this.getStringAttribute('fakeaccountdetection');
  }
  public set fakeaccountdetection(value: string) {
    this._fakeaccountdetection = value;
  }
  public resetFakeaccountdetection() {
    this._fakeaccountdetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeaccountdetectionInput() {
    return this._fakeaccountdetection;
  }

  // fieldconsistencyaction - computed: true, optional: true, required: false
  private _fieldconsistencyaction?: string[]; 
  public get fieldconsistencyaction() {
    return cdktf.Fn.tolist(this.getListAttribute('fieldconsistencyaction'));
  }
  public set fieldconsistencyaction(value: string[]) {
    this._fieldconsistencyaction = value;
  }
  public resetFieldconsistencyaction() {
    this._fieldconsistencyaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldconsistencyactionInput() {
    return this._fieldconsistencyaction;
  }

  // fieldformataction - computed: true, optional: true, required: false
  private _fieldformataction?: string[]; 
  public get fieldformataction() {
    return cdktf.Fn.tolist(this.getListAttribute('fieldformataction'));
  }
  public set fieldformataction(value: string[]) {
    this._fieldformataction = value;
  }
  public resetFieldformataction() {
    this._fieldformataction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldformatactionInput() {
    return this._fieldformataction;
  }

  // fieldscan - computed: true, optional: true, required: false
  private _fieldscan?: string; 
  public get fieldscan() {
    return this.getStringAttribute('fieldscan');
  }
  public set fieldscan(value: string) {
    this._fieldscan = value;
  }
  public resetFieldscan() {
    this._fieldscan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldscanInput() {
    return this._fieldscan;
  }

  // fieldscanlimit - computed: true, optional: true, required: false
  private _fieldscanlimit?: number; 
  public get fieldscanlimit() {
    return this.getNumberAttribute('fieldscanlimit');
  }
  public set fieldscanlimit(value: number) {
    this._fieldscanlimit = value;
  }
  public resetFieldscanlimit() {
    this._fieldscanlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldscanlimitInput() {
    return this._fieldscanlimit;
  }

  // fileuploadmaxnum - computed: true, optional: true, required: false
  private _fileuploadmaxnum?: number; 
  public get fileuploadmaxnum() {
    return this.getNumberAttribute('fileuploadmaxnum');
  }
  public set fileuploadmaxnum(value: number) {
    this._fileuploadmaxnum = value;
  }
  public resetFileuploadmaxnum() {
    this._fileuploadmaxnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileuploadmaxnumInput() {
    return this._fileuploadmaxnum;
  }

  // fileuploadtypesaction - computed: true, optional: true, required: false
  private _fileuploadtypesaction?: string[]; 
  public get fileuploadtypesaction() {
    return cdktf.Fn.tolist(this.getListAttribute('fileuploadtypesaction'));
  }
  public set fileuploadtypesaction(value: string[]) {
    this._fileuploadtypesaction = value;
  }
  public resetFileuploadtypesaction() {
    this._fileuploadtypesaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileuploadtypesactionInput() {
    return this._fileuploadtypesaction;
  }

  // geolocationlogging - computed: true, optional: true, required: false
  private _geolocationlogging?: string; 
  public get geolocationlogging() {
    return this.getStringAttribute('geolocationlogging');
  }
  public set geolocationlogging(value: string) {
    this._geolocationlogging = value;
  }
  public resetGeolocationlogging() {
    this._geolocationlogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationloggingInput() {
    return this._geolocationlogging;
  }

  // grpcaction - computed: true, optional: true, required: false
  private _grpcaction?: string[]; 
  public get grpcaction() {
    return cdktf.Fn.tolist(this.getListAttribute('grpcaction'));
  }
  public set grpcaction(value: string[]) {
    this._grpcaction = value;
  }
  public resetGrpcaction() {
    this._grpcaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcactionInput() {
    return this._grpcaction;
  }

  // htmlerrorobject - computed: true, optional: true, required: false
  private _htmlerrorobject?: string; 
  public get htmlerrorobject() {
    return this.getStringAttribute('htmlerrorobject');
  }
  public set htmlerrorobject(value: string) {
    this._htmlerrorobject = value;
  }
  public resetHtmlerrorobject() {
    this._htmlerrorobject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlerrorobjectInput() {
    return this._htmlerrorobject;
  }

  // htmlerrorstatuscode - computed: true, optional: true, required: false
  private _htmlerrorstatuscode?: number; 
  public get htmlerrorstatuscode() {
    return this.getNumberAttribute('htmlerrorstatuscode');
  }
  public set htmlerrorstatuscode(value: number) {
    this._htmlerrorstatuscode = value;
  }
  public resetHtmlerrorstatuscode() {
    this._htmlerrorstatuscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlerrorstatuscodeInput() {
    return this._htmlerrorstatuscode;
  }

  // htmlerrorstatusmessage - computed: true, optional: true, required: false
  private _htmlerrorstatusmessage?: string; 
  public get htmlerrorstatusmessage() {
    return this.getStringAttribute('htmlerrorstatusmessage');
  }
  public set htmlerrorstatusmessage(value: string) {
    this._htmlerrorstatusmessage = value;
  }
  public resetHtmlerrorstatusmessage() {
    this._htmlerrorstatusmessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlerrorstatusmessageInput() {
    return this._htmlerrorstatusmessage;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // importprofilename - computed: true, optional: true, required: false
  private _importprofilename?: string; 
  public get importprofilename() {
    return this.getStringAttribute('importprofilename');
  }
  public set importprofilename(value: string) {
    this._importprofilename = value;
  }
  public resetImportprofilename() {
    this._importprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importprofilenameInput() {
    return this._importprofilename;
  }

  // infercontenttypexmlpayloadaction - computed: true, optional: true, required: false
  private _infercontenttypexmlpayloadaction?: string[]; 
  public get infercontenttypexmlpayloadaction() {
    return this.getListAttribute('infercontenttypexmlpayloadaction');
  }
  public set infercontenttypexmlpayloadaction(value: string[]) {
    this._infercontenttypexmlpayloadaction = value;
  }
  public resetInfercontenttypexmlpayloadaction() {
    this._infercontenttypexmlpayloadaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infercontenttypexmlpayloadactionInput() {
    return this._infercontenttypexmlpayloadaction;
  }

  // insertcookiesamesiteattribute - computed: true, optional: true, required: false
  private _insertcookiesamesiteattribute?: string; 
  public get insertcookiesamesiteattribute() {
    return this.getStringAttribute('insertcookiesamesiteattribute');
  }
  public set insertcookiesamesiteattribute(value: string) {
    this._insertcookiesamesiteattribute = value;
  }
  public resetInsertcookiesamesiteattribute() {
    this._insertcookiesamesiteattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertcookiesamesiteattributeInput() {
    return this._insertcookiesamesiteattribute;
  }

  // inspectcontenttypes - computed: true, optional: true, required: false
  private _inspectcontenttypes?: string[]; 
  public get inspectcontenttypes() {
    return cdktf.Fn.tolist(this.getListAttribute('inspectcontenttypes'));
  }
  public set inspectcontenttypes(value: string[]) {
    this._inspectcontenttypes = value;
  }
  public resetInspectcontenttypes() {
    this._inspectcontenttypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectcontenttypesInput() {
    return this._inspectcontenttypes;
  }

  // inspectquerycontenttypes - computed: true, optional: true, required: false
  private _inspectquerycontenttypes?: string[]; 
  public get inspectquerycontenttypes() {
    return cdktf.Fn.tolist(this.getListAttribute('inspectquerycontenttypes'));
  }
  public set inspectquerycontenttypes(value: string[]) {
    this._inspectquerycontenttypes = value;
  }
  public resetInspectquerycontenttypes() {
    this._inspectquerycontenttypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectquerycontenttypesInput() {
    return this._inspectquerycontenttypes;
  }

  // invalidpercenthandling - computed: true, optional: true, required: false
  private _invalidpercenthandling?: string; 
  public get invalidpercenthandling() {
    return this.getStringAttribute('invalidpercenthandling');
  }
  public set invalidpercenthandling(value: string) {
    this._invalidpercenthandling = value;
  }
  public resetInvalidpercenthandling() {
    this._invalidpercenthandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidpercenthandlingInput() {
    return this._invalidpercenthandling;
  }

  // jsonblockkeywordaction - computed: true, optional: true, required: false
  private _jsonblockkeywordaction?: string[]; 
  public get jsonblockkeywordaction() {
    return cdktf.Fn.tolist(this.getListAttribute('jsonblockkeywordaction'));
  }
  public set jsonblockkeywordaction(value: string[]) {
    this._jsonblockkeywordaction = value;
  }
  public resetJsonblockkeywordaction() {
    this._jsonblockkeywordaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonblockkeywordactionInput() {
    return this._jsonblockkeywordaction;
  }

  // jsoncmdinjectionaction - computed: true, optional: true, required: false
  private _jsoncmdinjectionaction?: string[]; 
  public get jsoncmdinjectionaction() {
    return cdktf.Fn.tolist(this.getListAttribute('jsoncmdinjectionaction'));
  }
  public set jsoncmdinjectionaction(value: string[]) {
    this._jsoncmdinjectionaction = value;
  }
  public resetJsoncmdinjectionaction() {
    this._jsoncmdinjectionaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsoncmdinjectionactionInput() {
    return this._jsoncmdinjectionaction;
  }

  // jsoncmdinjectiongrammar - computed: true, optional: true, required: false
  private _jsoncmdinjectiongrammar?: string; 
  public get jsoncmdinjectiongrammar() {
    return this.getStringAttribute('jsoncmdinjectiongrammar');
  }
  public set jsoncmdinjectiongrammar(value: string) {
    this._jsoncmdinjectiongrammar = value;
  }
  public resetJsoncmdinjectiongrammar() {
    this._jsoncmdinjectiongrammar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsoncmdinjectiongrammarInput() {
    return this._jsoncmdinjectiongrammar;
  }

  // jsoncmdinjectiontype - computed: true, optional: true, required: false
  private _jsoncmdinjectiontype?: string; 
  public get jsoncmdinjectiontype() {
    return this.getStringAttribute('jsoncmdinjectiontype');
  }
  public set jsoncmdinjectiontype(value: string) {
    this._jsoncmdinjectiontype = value;
  }
  public resetJsoncmdinjectiontype() {
    this._jsoncmdinjectiontype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsoncmdinjectiontypeInput() {
    return this._jsoncmdinjectiontype;
  }

  // jsondosaction - computed: true, optional: true, required: false
  private _jsondosaction?: string[]; 
  public get jsondosaction() {
    return cdktf.Fn.tolist(this.getListAttribute('jsondosaction'));
  }
  public set jsondosaction(value: string[]) {
    this._jsondosaction = value;
  }
  public resetJsondosaction() {
    this._jsondosaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsondosactionInput() {
    return this._jsondosaction;
  }

  // jsonerrorobject - computed: true, optional: true, required: false
  private _jsonerrorobject?: string; 
  public get jsonerrorobject() {
    return this.getStringAttribute('jsonerrorobject');
  }
  public set jsonerrorobject(value: string) {
    this._jsonerrorobject = value;
  }
  public resetJsonerrorobject() {
    this._jsonerrorobject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonerrorobjectInput() {
    return this._jsonerrorobject;
  }

  // jsonerrorstatuscode - computed: true, optional: true, required: false
  private _jsonerrorstatuscode?: number; 
  public get jsonerrorstatuscode() {
    return this.getNumberAttribute('jsonerrorstatuscode');
  }
  public set jsonerrorstatuscode(value: number) {
    this._jsonerrorstatuscode = value;
  }
  public resetJsonerrorstatuscode() {
    this._jsonerrorstatuscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonerrorstatuscodeInput() {
    return this._jsonerrorstatuscode;
  }

  // jsonerrorstatusmessage - computed: true, optional: true, required: false
  private _jsonerrorstatusmessage?: string; 
  public get jsonerrorstatusmessage() {
    return this.getStringAttribute('jsonerrorstatusmessage');
  }
  public set jsonerrorstatusmessage(value: string) {
    this._jsonerrorstatusmessage = value;
  }
  public resetJsonerrorstatusmessage() {
    this._jsonerrorstatusmessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonerrorstatusmessageInput() {
    return this._jsonerrorstatusmessage;
  }

  // jsonfieldscan - computed: true, optional: true, required: false
  private _jsonfieldscan?: string; 
  public get jsonfieldscan() {
    return this.getStringAttribute('jsonfieldscan');
  }
  public set jsonfieldscan(value: string) {
    this._jsonfieldscan = value;
  }
  public resetJsonfieldscan() {
    this._jsonfieldscan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonfieldscanInput() {
    return this._jsonfieldscan;
  }

  // jsonfieldscanlimit - computed: true, optional: true, required: false
  private _jsonfieldscanlimit?: number; 
  public get jsonfieldscanlimit() {
    return this.getNumberAttribute('jsonfieldscanlimit');
  }
  public set jsonfieldscanlimit(value: number) {
    this._jsonfieldscanlimit = value;
  }
  public resetJsonfieldscanlimit() {
    this._jsonfieldscanlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonfieldscanlimitInput() {
    return this._jsonfieldscanlimit;
  }

  // jsonmessagescan - computed: true, optional: true, required: false
  private _jsonmessagescan?: string; 
  public get jsonmessagescan() {
    return this.getStringAttribute('jsonmessagescan');
  }
  public set jsonmessagescan(value: string) {
    this._jsonmessagescan = value;
  }
  public resetJsonmessagescan() {
    this._jsonmessagescan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmessagescanInput() {
    return this._jsonmessagescan;
  }

  // jsonmessagescanlimit - computed: true, optional: true, required: false
  private _jsonmessagescanlimit?: number; 
  public get jsonmessagescanlimit() {
    return this.getNumberAttribute('jsonmessagescanlimit');
  }
  public set jsonmessagescanlimit(value: number) {
    this._jsonmessagescanlimit = value;
  }
  public resetJsonmessagescanlimit() {
    this._jsonmessagescanlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmessagescanlimitInput() {
    return this._jsonmessagescanlimit;
  }

  // jsonsqlinjectionaction - computed: true, optional: true, required: false
  private _jsonsqlinjectionaction?: string[]; 
  public get jsonsqlinjectionaction() {
    return cdktf.Fn.tolist(this.getListAttribute('jsonsqlinjectionaction'));
  }
  public set jsonsqlinjectionaction(value: string[]) {
    this._jsonsqlinjectionaction = value;
  }
  public resetJsonsqlinjectionaction() {
    this._jsonsqlinjectionaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonsqlinjectionactionInput() {
    return this._jsonsqlinjectionaction;
  }

  // jsonsqlinjectiongrammar - computed: true, optional: true, required: false
  private _jsonsqlinjectiongrammar?: string; 
  public get jsonsqlinjectiongrammar() {
    return this.getStringAttribute('jsonsqlinjectiongrammar');
  }
  public set jsonsqlinjectiongrammar(value: string) {
    this._jsonsqlinjectiongrammar = value;
  }
  public resetJsonsqlinjectiongrammar() {
    this._jsonsqlinjectiongrammar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonsqlinjectiongrammarInput() {
    return this._jsonsqlinjectiongrammar;
  }

  // jsonsqlinjectiontype - computed: true, optional: true, required: false
  private _jsonsqlinjectiontype?: string; 
  public get jsonsqlinjectiontype() {
    return this.getStringAttribute('jsonsqlinjectiontype');
  }
  public set jsonsqlinjectiontype(value: string) {
    this._jsonsqlinjectiontype = value;
  }
  public resetJsonsqlinjectiontype() {
    this._jsonsqlinjectiontype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonsqlinjectiontypeInput() {
    return this._jsonsqlinjectiontype;
  }

  // jsonxssaction - computed: true, optional: true, required: false
  private _jsonxssaction?: string[]; 
  public get jsonxssaction() {
    return cdktf.Fn.tolist(this.getListAttribute('jsonxssaction'));
  }
  public set jsonxssaction(value: string[]) {
    this._jsonxssaction = value;
  }
  public resetJsonxssaction() {
    this._jsonxssaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonxssactionInput() {
    return this._jsonxssaction;
  }

  // logeverypolicyhit - computed: true, optional: true, required: false
  private _logeverypolicyhit?: string; 
  public get logeverypolicyhit() {
    return this.getStringAttribute('logeverypolicyhit');
  }
  public set logeverypolicyhit(value: string) {
    this._logeverypolicyhit = value;
  }
  public resetLogeverypolicyhit() {
    this._logeverypolicyhit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logeverypolicyhitInput() {
    return this._logeverypolicyhit;
  }

  // matchurlstring - computed: true, optional: true, required: false
  private _matchurlstring?: string; 
  public get matchurlstring() {
    return this.getStringAttribute('matchurlstring');
  }
  public set matchurlstring(value: string) {
    this._matchurlstring = value;
  }
  public resetMatchurlstring() {
    this._matchurlstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchurlstringInput() {
    return this._matchurlstring;
  }

  // messagescan - computed: true, optional: true, required: false
  private _messagescan?: string; 
  public get messagescan() {
    return this.getStringAttribute('messagescan');
  }
  public set messagescan(value: string) {
    this._messagescan = value;
  }
  public resetMessagescan() {
    this._messagescan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagescanInput() {
    return this._messagescan;
  }

  // messagescanlimit - computed: true, optional: true, required: false
  private _messagescanlimit?: number; 
  public get messagescanlimit() {
    return this.getNumberAttribute('messagescanlimit');
  }
  public set messagescanlimit(value: number) {
    this._messagescanlimit = value;
  }
  public resetMessagescanlimit() {
    this._messagescanlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagescanlimitInput() {
    return this._messagescanlimit;
  }

  // messagescanlimitcontenttypes - computed: true, optional: true, required: false
  private _messagescanlimitcontenttypes?: string[]; 
  public get messagescanlimitcontenttypes() {
    return cdktf.Fn.tolist(this.getListAttribute('messagescanlimitcontenttypes'));
  }
  public set messagescanlimitcontenttypes(value: string[]) {
    this._messagescanlimitcontenttypes = value;
  }
  public resetMessagescanlimitcontenttypes() {
    this._messagescanlimitcontenttypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagescanlimitcontenttypesInput() {
    return this._messagescanlimitcontenttypes;
  }

  // multipleheaderaction - computed: true, optional: true, required: false
  private _multipleheaderaction?: string[]; 
  public get multipleheaderaction() {
    return cdktf.Fn.tolist(this.getListAttribute('multipleheaderaction'));
  }
  public set multipleheaderaction(value: string[]) {
    this._multipleheaderaction = value;
  }
  public resetMultipleheaderaction() {
    this._multipleheaderaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleheaderactionInput() {
    return this._multipleheaderaction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optimizepartialreqs - computed: true, optional: true, required: false
  private _optimizepartialreqs?: string; 
  public get optimizepartialreqs() {
    return this.getStringAttribute('optimizepartialreqs');
  }
  public set optimizepartialreqs(value: string) {
    this._optimizepartialreqs = value;
  }
  public resetOptimizepartialreqs() {
    this._optimizepartialreqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizepartialreqsInput() {
    return this._optimizepartialreqs;
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // percentdecoderecursively - computed: true, optional: true, required: false
  private _percentdecoderecursively?: string; 
  public get percentdecoderecursively() {
    return this.getStringAttribute('percentdecoderecursively');
  }
  public set percentdecoderecursively(value: string) {
    this._percentdecoderecursively = value;
  }
  public resetPercentdecoderecursively() {
    this._percentdecoderecursively = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentdecoderecursivelyInput() {
    return this._percentdecoderecursively;
  }

  // postbodylimit - computed: true, optional: true, required: false
  private _postbodylimit?: number; 
  public get postbodylimit() {
    return this.getNumberAttribute('postbodylimit');
  }
  public set postbodylimit(value: number) {
    this._postbodylimit = value;
  }
  public resetPostbodylimit() {
    this._postbodylimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postbodylimitInput() {
    return this._postbodylimit;
  }

  // postbodylimitaction - computed: true, optional: true, required: false
  private _postbodylimitaction?: string[]; 
  public get postbodylimitaction() {
    return this.getListAttribute('postbodylimitaction');
  }
  public set postbodylimitaction(value: string[]) {
    this._postbodylimitaction = value;
  }
  public resetPostbodylimitaction() {
    this._postbodylimitaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postbodylimitactionInput() {
    return this._postbodylimitaction;
  }

  // postbodylimitsignature - computed: true, optional: true, required: false
  private _postbodylimitsignature?: number; 
  public get postbodylimitsignature() {
    return this.getNumberAttribute('postbodylimitsignature');
  }
  public set postbodylimitsignature(value: number) {
    this._postbodylimitsignature = value;
  }
  public resetPostbodylimitsignature() {
    this._postbodylimitsignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postbodylimitsignatureInput() {
    return this._postbodylimitsignature;
  }

  // protofileobject - computed: true, optional: true, required: false
  private _protofileobject?: string; 
  public get protofileobject() {
    return this.getStringAttribute('protofileobject');
  }
  public set protofileobject(value: string) {
    this._protofileobject = value;
  }
  public resetProtofileobject() {
    this._protofileobject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protofileobjectInput() {
    return this._protofileobject;
  }

  // refererheadercheck - computed: true, optional: true, required: false
  private _refererheadercheck?: string; 
  public get refererheadercheck() {
    return this.getStringAttribute('refererheadercheck');
  }
  public set refererheadercheck(value: string) {
    this._refererheadercheck = value;
  }
  public resetRefererheadercheck() {
    this._refererheadercheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererheadercheckInput() {
    return this._refererheadercheck;
  }

  // relaxationrules - computed: true, optional: true, required: false
  private _relaxationrules?: boolean | cdktf.IResolvable; 
  public get relaxationrules() {
    return this.getBooleanAttribute('relaxationrules');
  }
  public set relaxationrules(value: boolean | cdktf.IResolvable) {
    this._relaxationrules = value;
  }
  public resetRelaxationrules() {
    this._relaxationrules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaxationrulesInput() {
    return this._relaxationrules;
  }

  // replaceurlstring - computed: true, optional: true, required: false
  private _replaceurlstring?: string; 
  public get replaceurlstring() {
    return this.getStringAttribute('replaceurlstring');
  }
  public set replaceurlstring(value: string) {
    this._replaceurlstring = value;
  }
  public resetReplaceurlstring() {
    this._replaceurlstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceurlstringInput() {
    return this._replaceurlstring;
  }

  // requestcontenttype - computed: true, optional: true, required: false
  private _requestcontenttype?: string; 
  public get requestcontenttype() {
    return this.getStringAttribute('requestcontenttype');
  }
  public set requestcontenttype(value: string) {
    this._requestcontenttype = value;
  }
  public resetRequestcontenttype() {
    this._requestcontenttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestcontenttypeInput() {
    return this._requestcontenttype;
  }

  // responsecontenttype - computed: true, optional: true, required: false
  private _responsecontenttype?: string; 
  public get responsecontenttype() {
    return this.getStringAttribute('responsecontenttype');
  }
  public set responsecontenttype(value: string) {
    this._responsecontenttype = value;
  }
  public resetResponsecontenttype() {
    this._responsecontenttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsecontenttypeInput() {
    return this._responsecontenttype;
  }

  // restaction - computed: true, optional: true, required: false
  private _restaction?: string[]; 
  public get restaction() {
    return cdktf.Fn.tolist(this.getListAttribute('restaction'));
  }
  public set restaction(value: string[]) {
    this._restaction = value;
  }
  public resetRestaction() {
    this._restaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restactionInput() {
    return this._restaction;
  }

  // rfcprofile - computed: true, optional: true, required: false
  private _rfcprofile?: string; 
  public get rfcprofile() {
    return this.getStringAttribute('rfcprofile');
  }
  public set rfcprofile(value: string) {
    this._rfcprofile = value;
  }
  public resetRfcprofile() {
    this._rfcprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcprofileInput() {
    return this._rfcprofile;
  }

  // semicolonfieldseparator - computed: true, optional: true, required: false
  private _semicolonfieldseparator?: string; 
  public get semicolonfieldseparator() {
    return this.getStringAttribute('semicolonfieldseparator');
  }
  public set semicolonfieldseparator(value: string) {
    this._semicolonfieldseparator = value;
  }
  public resetSemicolonfieldseparator() {
    this._semicolonfieldseparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semicolonfieldseparatorInput() {
    return this._semicolonfieldseparator;
  }

  // sessioncookiename - computed: true, optional: true, required: false
  private _sessioncookiename?: string; 
  public get sessioncookiename() {
    return this.getStringAttribute('sessioncookiename');
  }
  public set sessioncookiename(value: string) {
    this._sessioncookiename = value;
  }
  public resetSessioncookiename() {
    this._sessioncookiename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessioncookienameInput() {
    return this._sessioncookiename;
  }

  // sessionlessfieldconsistency - computed: true, optional: true, required: false
  private _sessionlessfieldconsistency?: string; 
  public get sessionlessfieldconsistency() {
    return this.getStringAttribute('sessionlessfieldconsistency');
  }
  public set sessionlessfieldconsistency(value: string) {
    this._sessionlessfieldconsistency = value;
  }
  public resetSessionlessfieldconsistency() {
    this._sessionlessfieldconsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionlessfieldconsistencyInput() {
    return this._sessionlessfieldconsistency;
  }

  // sessionlessurlclosure - computed: true, optional: true, required: false
  private _sessionlessurlclosure?: string; 
  public get sessionlessurlclosure() {
    return this.getStringAttribute('sessionlessurlclosure');
  }
  public set sessionlessurlclosure(value: string) {
    this._sessionlessurlclosure = value;
  }
  public resetSessionlessurlclosure() {
    this._sessionlessurlclosure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionlessurlclosureInput() {
    return this._sessionlessurlclosure;
  }

  // signatures - computed: true, optional: true, required: false
  private _signatures?: string; 
  public get signatures() {
    return this.getStringAttribute('signatures');
  }
  public set signatures(value: string) {
    this._signatures = value;
  }
  public resetSignatures() {
    this._signatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures;
  }

  // sqlinjectionaction - computed: true, optional: true, required: false
  private _sqlinjectionaction?: string[]; 
  public get sqlinjectionaction() {
    return cdktf.Fn.tolist(this.getListAttribute('sqlinjectionaction'));
  }
  public set sqlinjectionaction(value: string[]) {
    this._sqlinjectionaction = value;
  }
  public resetSqlinjectionaction() {
    this._sqlinjectionaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectionactionInput() {
    return this._sqlinjectionaction;
  }

  // sqlinjectionchecksqlwildchars - computed: true, optional: true, required: false
  private _sqlinjectionchecksqlwildchars?: string; 
  public get sqlinjectionchecksqlwildchars() {
    return this.getStringAttribute('sqlinjectionchecksqlwildchars');
  }
  public set sqlinjectionchecksqlwildchars(value: string) {
    this._sqlinjectionchecksqlwildchars = value;
  }
  public resetSqlinjectionchecksqlwildchars() {
    this._sqlinjectionchecksqlwildchars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectionchecksqlwildcharsInput() {
    return this._sqlinjectionchecksqlwildchars;
  }

  // sqlinjectiongrammar - computed: true, optional: true, required: false
  private _sqlinjectiongrammar?: string; 
  public get sqlinjectiongrammar() {
    return this.getStringAttribute('sqlinjectiongrammar');
  }
  public set sqlinjectiongrammar(value: string) {
    this._sqlinjectiongrammar = value;
  }
  public resetSqlinjectiongrammar() {
    this._sqlinjectiongrammar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectiongrammarInput() {
    return this._sqlinjectiongrammar;
  }

  // sqlinjectiononlycheckfieldswithsqlchars - computed: true, optional: true, required: false
  private _sqlinjectiononlycheckfieldswithsqlchars?: string; 
  public get sqlinjectiononlycheckfieldswithsqlchars() {
    return this.getStringAttribute('sqlinjectiononlycheckfieldswithsqlchars');
  }
  public set sqlinjectiononlycheckfieldswithsqlchars(value: string) {
    this._sqlinjectiononlycheckfieldswithsqlchars = value;
  }
  public resetSqlinjectiononlycheckfieldswithsqlchars() {
    this._sqlinjectiononlycheckfieldswithsqlchars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectiononlycheckfieldswithsqlcharsInput() {
    return this._sqlinjectiononlycheckfieldswithsqlchars;
  }

  // sqlinjectionparsecomments - computed: true, optional: true, required: false
  private _sqlinjectionparsecomments?: string; 
  public get sqlinjectionparsecomments() {
    return this.getStringAttribute('sqlinjectionparsecomments');
  }
  public set sqlinjectionparsecomments(value: string) {
    this._sqlinjectionparsecomments = value;
  }
  public resetSqlinjectionparsecomments() {
    this._sqlinjectionparsecomments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectionparsecommentsInput() {
    return this._sqlinjectionparsecomments;
  }

  // sqlinjectionruletype - computed: true, optional: true, required: false
  private _sqlinjectionruletype?: string; 
  public get sqlinjectionruletype() {
    return this.getStringAttribute('sqlinjectionruletype');
  }
  public set sqlinjectionruletype(value: string) {
    this._sqlinjectionruletype = value;
  }
  public resetSqlinjectionruletype() {
    this._sqlinjectionruletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectionruletypeInput() {
    return this._sqlinjectionruletype;
  }

  // sqlinjectiontransformspecialchars - computed: true, optional: true, required: false
  private _sqlinjectiontransformspecialchars?: string; 
  public get sqlinjectiontransformspecialchars() {
    return this.getStringAttribute('sqlinjectiontransformspecialchars');
  }
  public set sqlinjectiontransformspecialchars(value: string) {
    this._sqlinjectiontransformspecialchars = value;
  }
  public resetSqlinjectiontransformspecialchars() {
    this._sqlinjectiontransformspecialchars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectiontransformspecialcharsInput() {
    return this._sqlinjectiontransformspecialchars;
  }

  // sqlinjectiontype - computed: true, optional: true, required: false
  private _sqlinjectiontype?: string; 
  public get sqlinjectiontype() {
    return this.getStringAttribute('sqlinjectiontype');
  }
  public set sqlinjectiontype(value: string) {
    this._sqlinjectiontype = value;
  }
  public resetSqlinjectiontype() {
    this._sqlinjectiontype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectiontypeInput() {
    return this._sqlinjectiontype;
  }

  // starturlaction - computed: true, optional: true, required: false
  private _starturlaction?: string[]; 
  public get starturlaction() {
    return cdktf.Fn.tolist(this.getListAttribute('starturlaction'));
  }
  public set starturlaction(value: string[]) {
    this._starturlaction = value;
  }
  public resetStarturlaction() {
    this._starturlaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starturlactionInput() {
    return this._starturlaction;
  }

  // starturlclosure - computed: true, optional: true, required: false
  private _starturlclosure?: string; 
  public get starturlclosure() {
    return this.getStringAttribute('starturlclosure');
  }
  public set starturlclosure(value: string) {
    this._starturlclosure = value;
  }
  public resetStarturlclosure() {
    this._starturlclosure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starturlclosureInput() {
    return this._starturlclosure;
  }

  // streaming - computed: true, optional: true, required: false
  private _streaming?: string; 
  public get streaming() {
    return this.getStringAttribute('streaming');
  }
  public set streaming(value: string) {
    this._streaming = value;
  }
  public resetStreaming() {
    this._streaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingInput() {
    return this._streaming;
  }

  // stripcomments - computed: true, optional: true, required: false
  private _stripcomments?: string; 
  public get stripcomments() {
    return this.getStringAttribute('stripcomments');
  }
  public set stripcomments(value: string) {
    this._stripcomments = value;
  }
  public resetStripcomments() {
    this._stripcomments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripcommentsInput() {
    return this._stripcomments;
  }

  // striphtmlcomments - computed: true, optional: true, required: false
  private _striphtmlcomments?: string; 
  public get striphtmlcomments() {
    return this.getStringAttribute('striphtmlcomments');
  }
  public set striphtmlcomments(value: string) {
    this._striphtmlcomments = value;
  }
  public resetStriphtmlcomments() {
    this._striphtmlcomments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get striphtmlcommentsInput() {
    return this._striphtmlcomments;
  }

  // stripxmlcomments - computed: true, optional: true, required: false
  private _stripxmlcomments?: string; 
  public get stripxmlcomments() {
    return this.getStringAttribute('stripxmlcomments');
  }
  public set stripxmlcomments(value: string) {
    this._stripxmlcomments = value;
  }
  public resetStripxmlcomments() {
    this._stripxmlcomments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripxmlcommentsInput() {
    return this._stripxmlcomments;
  }

  // trace - computed: true, optional: true, required: false
  private _trace?: string; 
  public get trace() {
    return this.getStringAttribute('trace');
  }
  public set trace(value: string) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return cdktf.Fn.tolist(this.getListAttribute('type'));
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // urldecoderequestcookies - computed: true, optional: true, required: false
  private _urldecoderequestcookies?: string; 
  public get urldecoderequestcookies() {
    return this.getStringAttribute('urldecoderequestcookies');
  }
  public set urldecoderequestcookies(value: string) {
    this._urldecoderequestcookies = value;
  }
  public resetUrldecoderequestcookies() {
    this._urldecoderequestcookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urldecoderequestcookiesInput() {
    return this._urldecoderequestcookies;
  }

  // usehtmlerrorobject - computed: true, optional: true, required: false
  private _usehtmlerrorobject?: string; 
  public get usehtmlerrorobject() {
    return this.getStringAttribute('usehtmlerrorobject');
  }
  public set usehtmlerrorobject(value: string) {
    this._usehtmlerrorobject = value;
  }
  public resetUsehtmlerrorobject() {
    this._usehtmlerrorobject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usehtmlerrorobjectInput() {
    return this._usehtmlerrorobject;
  }

  // verboseloglevel - computed: true, optional: true, required: false
  private _verboseloglevel?: string; 
  public get verboseloglevel() {
    return this.getStringAttribute('verboseloglevel');
  }
  public set verboseloglevel(value: string) {
    this._verboseloglevel = value;
  }
  public resetVerboseloglevel() {
    this._verboseloglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseloglevelInput() {
    return this._verboseloglevel;
  }

  // xmlattachmentaction - computed: true, optional: true, required: false
  private _xmlattachmentaction?: string[]; 
  public get xmlattachmentaction() {
    return cdktf.Fn.tolist(this.getListAttribute('xmlattachmentaction'));
  }
  public set xmlattachmentaction(value: string[]) {
    this._xmlattachmentaction = value;
  }
  public resetXmlattachmentaction() {
    this._xmlattachmentaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlattachmentactionInput() {
    return this._xmlattachmentaction;
  }

  // xmldosaction - computed: true, optional: true, required: false
  private _xmldosaction?: string[]; 
  public get xmldosaction() {
    return cdktf.Fn.tolist(this.getListAttribute('xmldosaction'));
  }
  public set xmldosaction(value: string[]) {
    this._xmldosaction = value;
  }
  public resetXmldosaction() {
    this._xmldosaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmldosactionInput() {
    return this._xmldosaction;
  }

  // xmlerrorobject - computed: true, optional: true, required: false
  private _xmlerrorobject?: string; 
  public get xmlerrorobject() {
    return this.getStringAttribute('xmlerrorobject');
  }
  public set xmlerrorobject(value: string) {
    this._xmlerrorobject = value;
  }
  public resetXmlerrorobject() {
    this._xmlerrorobject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlerrorobjectInput() {
    return this._xmlerrorobject;
  }

  // xmlerrorstatuscode - computed: true, optional: true, required: false
  private _xmlerrorstatuscode?: number; 
  public get xmlerrorstatuscode() {
    return this.getNumberAttribute('xmlerrorstatuscode');
  }
  public set xmlerrorstatuscode(value: number) {
    this._xmlerrorstatuscode = value;
  }
  public resetXmlerrorstatuscode() {
    this._xmlerrorstatuscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlerrorstatuscodeInput() {
    return this._xmlerrorstatuscode;
  }

  // xmlerrorstatusmessage - computed: true, optional: true, required: false
  private _xmlerrorstatusmessage?: string; 
  public get xmlerrorstatusmessage() {
    return this.getStringAttribute('xmlerrorstatusmessage');
  }
  public set xmlerrorstatusmessage(value: string) {
    this._xmlerrorstatusmessage = value;
  }
  public resetXmlerrorstatusmessage() {
    this._xmlerrorstatusmessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlerrorstatusmessageInput() {
    return this._xmlerrorstatusmessage;
  }

  // xmlformataction - computed: true, optional: true, required: false
  private _xmlformataction?: string[]; 
  public get xmlformataction() {
    return cdktf.Fn.tolist(this.getListAttribute('xmlformataction'));
  }
  public set xmlformataction(value: string[]) {
    this._xmlformataction = value;
  }
  public resetXmlformataction() {
    this._xmlformataction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlformatactionInput() {
    return this._xmlformataction;
  }

  // xmlsoapfaultaction - computed: true, optional: true, required: false
  private _xmlsoapfaultaction?: string[]; 
  public get xmlsoapfaultaction() {
    return cdktf.Fn.tolist(this.getListAttribute('xmlsoapfaultaction'));
  }
  public set xmlsoapfaultaction(value: string[]) {
    this._xmlsoapfaultaction = value;
  }
  public resetXmlsoapfaultaction() {
    this._xmlsoapfaultaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlsoapfaultactionInput() {
    return this._xmlsoapfaultaction;
  }

  // xmlsqlinjectionaction - computed: true, optional: true, required: false
  private _xmlsqlinjectionaction?: string[]; 
  public get xmlsqlinjectionaction() {
    return cdktf.Fn.tolist(this.getListAttribute('xmlsqlinjectionaction'));
  }
  public set xmlsqlinjectionaction(value: string[]) {
    this._xmlsqlinjectionaction = value;
  }
  public resetXmlsqlinjectionaction() {
    this._xmlsqlinjectionaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlsqlinjectionactionInput() {
    return this._xmlsqlinjectionaction;
  }

  // xmlsqlinjectionchecksqlwildchars - computed: true, optional: true, required: false
  private _xmlsqlinjectionchecksqlwildchars?: string; 
  public get xmlsqlinjectionchecksqlwildchars() {
    return this.getStringAttribute('xmlsqlinjectionchecksqlwildchars');
  }
  public set xmlsqlinjectionchecksqlwildchars(value: string) {
    this._xmlsqlinjectionchecksqlwildchars = value;
  }
  public resetXmlsqlinjectionchecksqlwildchars() {
    this._xmlsqlinjectionchecksqlwildchars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlsqlinjectionchecksqlwildcharsInput() {
    return this._xmlsqlinjectionchecksqlwildchars;
  }

  // xmlsqlinjectiononlycheckfieldswithsqlchars - computed: true, optional: true, required: false
  private _xmlsqlinjectiononlycheckfieldswithsqlchars?: string; 
  public get xmlsqlinjectiononlycheckfieldswithsqlchars() {
    return this.getStringAttribute('xmlsqlinjectiononlycheckfieldswithsqlchars');
  }
  public set xmlsqlinjectiononlycheckfieldswithsqlchars(value: string) {
    this._xmlsqlinjectiononlycheckfieldswithsqlchars = value;
  }
  public resetXmlsqlinjectiononlycheckfieldswithsqlchars() {
    this._xmlsqlinjectiononlycheckfieldswithsqlchars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlsqlinjectiononlycheckfieldswithsqlcharsInput() {
    return this._xmlsqlinjectiononlycheckfieldswithsqlchars;
  }

  // xmlsqlinjectionparsecomments - computed: true, optional: true, required: false
  private _xmlsqlinjectionparsecomments?: string; 
  public get xmlsqlinjectionparsecomments() {
    return this.getStringAttribute('xmlsqlinjectionparsecomments');
  }
  public set xmlsqlinjectionparsecomments(value: string) {
    this._xmlsqlinjectionparsecomments = value;
  }
  public resetXmlsqlinjectionparsecomments() {
    this._xmlsqlinjectionparsecomments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlsqlinjectionparsecommentsInput() {
    return this._xmlsqlinjectionparsecomments;
  }

  // xmlsqlinjectiontype - computed: true, optional: true, required: false
  private _xmlsqlinjectiontype?: string; 
  public get xmlsqlinjectiontype() {
    return this.getStringAttribute('xmlsqlinjectiontype');
  }
  public set xmlsqlinjectiontype(value: string) {
    this._xmlsqlinjectiontype = value;
  }
  public resetXmlsqlinjectiontype() {
    this._xmlsqlinjectiontype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlsqlinjectiontypeInput() {
    return this._xmlsqlinjectiontype;
  }

  // xmlvalidationaction - computed: true, optional: true, required: false
  private _xmlvalidationaction?: string[]; 
  public get xmlvalidationaction() {
    return cdktf.Fn.tolist(this.getListAttribute('xmlvalidationaction'));
  }
  public set xmlvalidationaction(value: string[]) {
    this._xmlvalidationaction = value;
  }
  public resetXmlvalidationaction() {
    this._xmlvalidationaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlvalidationactionInput() {
    return this._xmlvalidationaction;
  }

  // xmlwsiaction - computed: true, optional: true, required: false
  private _xmlwsiaction?: string[]; 
  public get xmlwsiaction() {
    return cdktf.Fn.tolist(this.getListAttribute('xmlwsiaction'));
  }
  public set xmlwsiaction(value: string[]) {
    this._xmlwsiaction = value;
  }
  public resetXmlwsiaction() {
    this._xmlwsiaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlwsiactionInput() {
    return this._xmlwsiaction;
  }

  // xmlxssaction - computed: true, optional: true, required: false
  private _xmlxssaction?: string[]; 
  public get xmlxssaction() {
    return cdktf.Fn.tolist(this.getListAttribute('xmlxssaction'));
  }
  public set xmlxssaction(value: string[]) {
    this._xmlxssaction = value;
  }
  public resetXmlxssaction() {
    this._xmlxssaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlxssactionInput() {
    return this._xmlxssaction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addcookieflags: cdktf.stringToTerraform(this._addcookieflags),
      apispec: cdktf.stringToTerraform(this._apispec),
      archivename: cdktf.stringToTerraform(this._archivename),
      as_prof_bypass_list_enable: cdktf.stringToTerraform(this._asProfBypassListEnable),
      as_prof_deny_list_enable: cdktf.stringToTerraform(this._asProfDenyListEnable),
      augment: cdktf.booleanToTerraform(this._augment),
      blockkeywordaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockkeywordaction),
      bufferoverflowaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bufferoverflowaction),
      bufferoverflowmaxcookielength: cdktf.numberToTerraform(this._bufferoverflowmaxcookielength),
      bufferoverflowmaxheaderlength: cdktf.numberToTerraform(this._bufferoverflowmaxheaderlength),
      bufferoverflowmaxquerylength: cdktf.numberToTerraform(this._bufferoverflowmaxquerylength),
      bufferoverflowmaxtotalheaderlength: cdktf.numberToTerraform(this._bufferoverflowmaxtotalheaderlength),
      bufferoverflowmaxurllength: cdktf.numberToTerraform(this._bufferoverflowmaxurllength),
      canonicalizehtmlresponse: cdktf.stringToTerraform(this._canonicalizehtmlresponse),
      ceflogging: cdktf.stringToTerraform(this._ceflogging),
      checkrequestheaders: cdktf.stringToTerraform(this._checkrequestheaders),
      clientipexpression: cdktf.stringToTerraform(this._clientipexpression),
      cmdinjectionaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cmdinjectionaction),
      cmdinjectiongrammar: cdktf.stringToTerraform(this._cmdinjectiongrammar),
      cmdinjectiontype: cdktf.stringToTerraform(this._cmdinjectiontype),
      comment: cdktf.stringToTerraform(this._comment),
      contenttypeaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contenttypeaction),
      cookieconsistencyaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cookieconsistencyaction),
      cookieencryption: cdktf.stringToTerraform(this._cookieencryption),
      cookiehijackingaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cookiehijackingaction),
      cookieproxying: cdktf.stringToTerraform(this._cookieproxying),
      cookiesamesiteattribute: cdktf.stringToTerraform(this._cookiesamesiteattribute),
      cookietransforms: cdktf.stringToTerraform(this._cookietransforms),
      creditcard: cdktf.listMapper(cdktf.stringToTerraform, false)(this._creditcard),
      creditcardaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._creditcardaction),
      creditcardmaxallowed: cdktf.numberToTerraform(this._creditcardmaxallowed),
      creditcardxout: cdktf.stringToTerraform(this._creditcardxout),
      crosssitescriptingaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._crosssitescriptingaction),
      crosssitescriptingcheckcompleteurls: cdktf.stringToTerraform(this._crosssitescriptingcheckcompleteurls),
      crosssitescriptingtransformunsafehtml: cdktf.stringToTerraform(this._crosssitescriptingtransformunsafehtml),
      csrftagaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._csrftagaction),
      customsettings: cdktf.stringToTerraform(this._customsettings),
      defaultcharset: cdktf.stringToTerraform(this._defaultcharset),
      defaultfieldformatmaxlength: cdktf.numberToTerraform(this._defaultfieldformatmaxlength),
      defaultfieldformatmaxoccurrences: cdktf.numberToTerraform(this._defaultfieldformatmaxoccurrences),
      defaultfieldformatminlength: cdktf.numberToTerraform(this._defaultfieldformatminlength),
      defaultfieldformattype: cdktf.stringToTerraform(this._defaultfieldformattype),
      defaults: cdktf.stringToTerraform(this._defaults),
      denyurlaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._denyurlaction),
      dosecurecreditcardlogging: cdktf.stringToTerraform(this._dosecurecreditcardlogging),
      dynamiclearning: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynamiclearning),
      enableformtagging: cdktf.stringToTerraform(this._enableformtagging),
      errorurl: cdktf.stringToTerraform(this._errorurl),
      excludefileuploadfromchecks: cdktf.stringToTerraform(this._excludefileuploadfromchecks),
      exemptclosureurlsfromsecuritychecks: cdktf.stringToTerraform(this._exemptclosureurlsfromsecuritychecks),
      fakeaccountdetection: cdktf.stringToTerraform(this._fakeaccountdetection),
      fieldconsistencyaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldconsistencyaction),
      fieldformataction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldformataction),
      fieldscan: cdktf.stringToTerraform(this._fieldscan),
      fieldscanlimit: cdktf.numberToTerraform(this._fieldscanlimit),
      fileuploadmaxnum: cdktf.numberToTerraform(this._fileuploadmaxnum),
      fileuploadtypesaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileuploadtypesaction),
      geolocationlogging: cdktf.stringToTerraform(this._geolocationlogging),
      grpcaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grpcaction),
      htmlerrorobject: cdktf.stringToTerraform(this._htmlerrorobject),
      htmlerrorstatuscode: cdktf.numberToTerraform(this._htmlerrorstatuscode),
      htmlerrorstatusmessage: cdktf.stringToTerraform(this._htmlerrorstatusmessage),
      id: cdktf.stringToTerraform(this._id),
      importprofilename: cdktf.stringToTerraform(this._importprofilename),
      infercontenttypexmlpayloadaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._infercontenttypexmlpayloadaction),
      insertcookiesamesiteattribute: cdktf.stringToTerraform(this._insertcookiesamesiteattribute),
      inspectcontenttypes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inspectcontenttypes),
      inspectquerycontenttypes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inspectquerycontenttypes),
      invalidpercenthandling: cdktf.stringToTerraform(this._invalidpercenthandling),
      jsonblockkeywordaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jsonblockkeywordaction),
      jsoncmdinjectionaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jsoncmdinjectionaction),
      jsoncmdinjectiongrammar: cdktf.stringToTerraform(this._jsoncmdinjectiongrammar),
      jsoncmdinjectiontype: cdktf.stringToTerraform(this._jsoncmdinjectiontype),
      jsondosaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jsondosaction),
      jsonerrorobject: cdktf.stringToTerraform(this._jsonerrorobject),
      jsonerrorstatuscode: cdktf.numberToTerraform(this._jsonerrorstatuscode),
      jsonerrorstatusmessage: cdktf.stringToTerraform(this._jsonerrorstatusmessage),
      jsonfieldscan: cdktf.stringToTerraform(this._jsonfieldscan),
      jsonfieldscanlimit: cdktf.numberToTerraform(this._jsonfieldscanlimit),
      jsonmessagescan: cdktf.stringToTerraform(this._jsonmessagescan),
      jsonmessagescanlimit: cdktf.numberToTerraform(this._jsonmessagescanlimit),
      jsonsqlinjectionaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jsonsqlinjectionaction),
      jsonsqlinjectiongrammar: cdktf.stringToTerraform(this._jsonsqlinjectiongrammar),
      jsonsqlinjectiontype: cdktf.stringToTerraform(this._jsonsqlinjectiontype),
      jsonxssaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jsonxssaction),
      logeverypolicyhit: cdktf.stringToTerraform(this._logeverypolicyhit),
      matchurlstring: cdktf.stringToTerraform(this._matchurlstring),
      messagescan: cdktf.stringToTerraform(this._messagescan),
      messagescanlimit: cdktf.numberToTerraform(this._messagescanlimit),
      messagescanlimitcontenttypes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._messagescanlimitcontenttypes),
      multipleheaderaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._multipleheaderaction),
      name: cdktf.stringToTerraform(this._name),
      optimizepartialreqs: cdktf.stringToTerraform(this._optimizepartialreqs),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      percentdecoderecursively: cdktf.stringToTerraform(this._percentdecoderecursively),
      postbodylimit: cdktf.numberToTerraform(this._postbodylimit),
      postbodylimitaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postbodylimitaction),
      postbodylimitsignature: cdktf.numberToTerraform(this._postbodylimitsignature),
      protofileobject: cdktf.stringToTerraform(this._protofileobject),
      refererheadercheck: cdktf.stringToTerraform(this._refererheadercheck),
      relaxationrules: cdktf.booleanToTerraform(this._relaxationrules),
      replaceurlstring: cdktf.stringToTerraform(this._replaceurlstring),
      requestcontenttype: cdktf.stringToTerraform(this._requestcontenttype),
      responsecontenttype: cdktf.stringToTerraform(this._responsecontenttype),
      restaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restaction),
      rfcprofile: cdktf.stringToTerraform(this._rfcprofile),
      semicolonfieldseparator: cdktf.stringToTerraform(this._semicolonfieldseparator),
      sessioncookiename: cdktf.stringToTerraform(this._sessioncookiename),
      sessionlessfieldconsistency: cdktf.stringToTerraform(this._sessionlessfieldconsistency),
      sessionlessurlclosure: cdktf.stringToTerraform(this._sessionlessurlclosure),
      signatures: cdktf.stringToTerraform(this._signatures),
      sqlinjectionaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sqlinjectionaction),
      sqlinjectionchecksqlwildchars: cdktf.stringToTerraform(this._sqlinjectionchecksqlwildchars),
      sqlinjectiongrammar: cdktf.stringToTerraform(this._sqlinjectiongrammar),
      sqlinjectiononlycheckfieldswithsqlchars: cdktf.stringToTerraform(this._sqlinjectiononlycheckfieldswithsqlchars),
      sqlinjectionparsecomments: cdktf.stringToTerraform(this._sqlinjectionparsecomments),
      sqlinjectionruletype: cdktf.stringToTerraform(this._sqlinjectionruletype),
      sqlinjectiontransformspecialchars: cdktf.stringToTerraform(this._sqlinjectiontransformspecialchars),
      sqlinjectiontype: cdktf.stringToTerraform(this._sqlinjectiontype),
      starturlaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._starturlaction),
      starturlclosure: cdktf.stringToTerraform(this._starturlclosure),
      streaming: cdktf.stringToTerraform(this._streaming),
      stripcomments: cdktf.stringToTerraform(this._stripcomments),
      striphtmlcomments: cdktf.stringToTerraform(this._striphtmlcomments),
      stripxmlcomments: cdktf.stringToTerraform(this._stripxmlcomments),
      trace: cdktf.stringToTerraform(this._trace),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
      urldecoderequestcookies: cdktf.stringToTerraform(this._urldecoderequestcookies),
      usehtmlerrorobject: cdktf.stringToTerraform(this._usehtmlerrorobject),
      verboseloglevel: cdktf.stringToTerraform(this._verboseloglevel),
      xmlattachmentaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xmlattachmentaction),
      xmldosaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xmldosaction),
      xmlerrorobject: cdktf.stringToTerraform(this._xmlerrorobject),
      xmlerrorstatuscode: cdktf.numberToTerraform(this._xmlerrorstatuscode),
      xmlerrorstatusmessage: cdktf.stringToTerraform(this._xmlerrorstatusmessage),
      xmlformataction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xmlformataction),
      xmlsoapfaultaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xmlsoapfaultaction),
      xmlsqlinjectionaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xmlsqlinjectionaction),
      xmlsqlinjectionchecksqlwildchars: cdktf.stringToTerraform(this._xmlsqlinjectionchecksqlwildchars),
      xmlsqlinjectiononlycheckfieldswithsqlchars: cdktf.stringToTerraform(this._xmlsqlinjectiononlycheckfieldswithsqlchars),
      xmlsqlinjectionparsecomments: cdktf.stringToTerraform(this._xmlsqlinjectionparsecomments),
      xmlsqlinjectiontype: cdktf.stringToTerraform(this._xmlsqlinjectiontype),
      xmlvalidationaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xmlvalidationaction),
      xmlwsiaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xmlwsiaction),
      xmlxssaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xmlxssaction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addcookieflags: {
        value: cdktf.stringToHclTerraform(this._addcookieflags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apispec: {
        value: cdktf.stringToHclTerraform(this._apispec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archivename: {
        value: cdktf.stringToHclTerraform(this._archivename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_prof_bypass_list_enable: {
        value: cdktf.stringToHclTerraform(this._asProfBypassListEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_prof_deny_list_enable: {
        value: cdktf.stringToHclTerraform(this._asProfDenyListEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      augment: {
        value: cdktf.booleanToHclTerraform(this._augment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blockkeywordaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockkeywordaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bufferoverflowaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bufferoverflowaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bufferoverflowmaxcookielength: {
        value: cdktf.numberToHclTerraform(this._bufferoverflowmaxcookielength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bufferoverflowmaxheaderlength: {
        value: cdktf.numberToHclTerraform(this._bufferoverflowmaxheaderlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bufferoverflowmaxquerylength: {
        value: cdktf.numberToHclTerraform(this._bufferoverflowmaxquerylength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bufferoverflowmaxtotalheaderlength: {
        value: cdktf.numberToHclTerraform(this._bufferoverflowmaxtotalheaderlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bufferoverflowmaxurllength: {
        value: cdktf.numberToHclTerraform(this._bufferoverflowmaxurllength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      canonicalizehtmlresponse: {
        value: cdktf.stringToHclTerraform(this._canonicalizehtmlresponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ceflogging: {
        value: cdktf.stringToHclTerraform(this._ceflogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checkrequestheaders: {
        value: cdktf.stringToHclTerraform(this._checkrequestheaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientipexpression: {
        value: cdktf.stringToHclTerraform(this._clientipexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmdinjectionaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cmdinjectionaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cmdinjectiongrammar: {
        value: cdktf.stringToHclTerraform(this._cmdinjectiongrammar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmdinjectiontype: {
        value: cdktf.stringToHclTerraform(this._cmdinjectiontype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contenttypeaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contenttypeaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cookieconsistencyaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cookieconsistencyaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cookieencryption: {
        value: cdktf.stringToHclTerraform(this._cookieencryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiehijackingaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cookiehijackingaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cookieproxying: {
        value: cdktf.stringToHclTerraform(this._cookieproxying),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiesamesiteattribute: {
        value: cdktf.stringToHclTerraform(this._cookiesamesiteattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookietransforms: {
        value: cdktf.stringToHclTerraform(this._cookietransforms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creditcard: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._creditcard),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      creditcardaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._creditcardaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      creditcardmaxallowed: {
        value: cdktf.numberToHclTerraform(this._creditcardmaxallowed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      creditcardxout: {
        value: cdktf.stringToHclTerraform(this._creditcardxout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crosssitescriptingaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._crosssitescriptingaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      crosssitescriptingcheckcompleteurls: {
        value: cdktf.stringToHclTerraform(this._crosssitescriptingcheckcompleteurls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crosssitescriptingtransformunsafehtml: {
        value: cdktf.stringToHclTerraform(this._crosssitescriptingtransformunsafehtml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csrftagaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._csrftagaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      customsettings: {
        value: cdktf.stringToHclTerraform(this._customsettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultcharset: {
        value: cdktf.stringToHclTerraform(this._defaultcharset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultfieldformatmaxlength: {
        value: cdktf.numberToHclTerraform(this._defaultfieldformatmaxlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaultfieldformatmaxoccurrences: {
        value: cdktf.numberToHclTerraform(this._defaultfieldformatmaxoccurrences),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaultfieldformatminlength: {
        value: cdktf.numberToHclTerraform(this._defaultfieldformatminlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaultfieldformattype: {
        value: cdktf.stringToHclTerraform(this._defaultfieldformattype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults: {
        value: cdktf.stringToHclTerraform(this._defaults),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      denyurlaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._denyurlaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dosecurecreditcardlogging: {
        value: cdktf.stringToHclTerraform(this._dosecurecreditcardlogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamiclearning: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynamiclearning),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enableformtagging: {
        value: cdktf.stringToHclTerraform(this._enableformtagging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      errorurl: {
        value: cdktf.stringToHclTerraform(this._errorurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excludefileuploadfromchecks: {
        value: cdktf.stringToHclTerraform(this._excludefileuploadfromchecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exemptclosureurlsfromsecuritychecks: {
        value: cdktf.stringToHclTerraform(this._exemptclosureurlsfromsecuritychecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fakeaccountdetection: {
        value: cdktf.stringToHclTerraform(this._fakeaccountdetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fieldconsistencyaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldconsistencyaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fieldformataction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldformataction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fieldscan: {
        value: cdktf.stringToHclTerraform(this._fieldscan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fieldscanlimit: {
        value: cdktf.numberToHclTerraform(this._fieldscanlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fileuploadmaxnum: {
        value: cdktf.numberToHclTerraform(this._fileuploadmaxnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fileuploadtypesaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileuploadtypesaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      geolocationlogging: {
        value: cdktf.stringToHclTerraform(this._geolocationlogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grpcaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grpcaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      htmlerrorobject: {
        value: cdktf.stringToHclTerraform(this._htmlerrorobject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      htmlerrorstatuscode: {
        value: cdktf.numberToHclTerraform(this._htmlerrorstatuscode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      htmlerrorstatusmessage: {
        value: cdktf.stringToHclTerraform(this._htmlerrorstatusmessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      importprofilename: {
        value: cdktf.stringToHclTerraform(this._importprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infercontenttypexmlpayloadaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._infercontenttypexmlpayloadaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      insertcookiesamesiteattribute: {
        value: cdktf.stringToHclTerraform(this._insertcookiesamesiteattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspectcontenttypes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inspectcontenttypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      inspectquerycontenttypes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inspectquerycontenttypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      invalidpercenthandling: {
        value: cdktf.stringToHclTerraform(this._invalidpercenthandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonblockkeywordaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jsonblockkeywordaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      jsoncmdinjectionaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jsoncmdinjectionaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      jsoncmdinjectiongrammar: {
        value: cdktf.stringToHclTerraform(this._jsoncmdinjectiongrammar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsoncmdinjectiontype: {
        value: cdktf.stringToHclTerraform(this._jsoncmdinjectiontype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsondosaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jsondosaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      jsonerrorobject: {
        value: cdktf.stringToHclTerraform(this._jsonerrorobject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonerrorstatuscode: {
        value: cdktf.numberToHclTerraform(this._jsonerrorstatuscode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonerrorstatusmessage: {
        value: cdktf.stringToHclTerraform(this._jsonerrorstatusmessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonfieldscan: {
        value: cdktf.stringToHclTerraform(this._jsonfieldscan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonfieldscanlimit: {
        value: cdktf.numberToHclTerraform(this._jsonfieldscanlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonmessagescan: {
        value: cdktf.stringToHclTerraform(this._jsonmessagescan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonmessagescanlimit: {
        value: cdktf.numberToHclTerraform(this._jsonmessagescanlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonsqlinjectionaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jsonsqlinjectionaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      jsonsqlinjectiongrammar: {
        value: cdktf.stringToHclTerraform(this._jsonsqlinjectiongrammar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonsqlinjectiontype: {
        value: cdktf.stringToHclTerraform(this._jsonsqlinjectiontype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonxssaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jsonxssaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      logeverypolicyhit: {
        value: cdktf.stringToHclTerraform(this._logeverypolicyhit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matchurlstring: {
        value: cdktf.stringToHclTerraform(this._matchurlstring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messagescan: {
        value: cdktf.stringToHclTerraform(this._messagescan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messagescanlimit: {
        value: cdktf.numberToHclTerraform(this._messagescanlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      messagescanlimitcontenttypes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._messagescanlimitcontenttypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      multipleheaderaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._multipleheaderaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimizepartialreqs: {
        value: cdktf.stringToHclTerraform(this._optimizepartialreqs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      percentdecoderecursively: {
        value: cdktf.stringToHclTerraform(this._percentdecoderecursively),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postbodylimit: {
        value: cdktf.numberToHclTerraform(this._postbodylimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      postbodylimitaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postbodylimitaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      postbodylimitsignature: {
        value: cdktf.numberToHclTerraform(this._postbodylimitsignature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protofileobject: {
        value: cdktf.stringToHclTerraform(this._protofileobject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refererheadercheck: {
        value: cdktf.stringToHclTerraform(this._refererheadercheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relaxationrules: {
        value: cdktf.booleanToHclTerraform(this._relaxationrules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replaceurlstring: {
        value: cdktf.stringToHclTerraform(this._replaceurlstring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestcontenttype: {
        value: cdktf.stringToHclTerraform(this._requestcontenttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsecontenttype: {
        value: cdktf.stringToHclTerraform(this._responsecontenttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rfcprofile: {
        value: cdktf.stringToHclTerraform(this._rfcprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      semicolonfieldseparator: {
        value: cdktf.stringToHclTerraform(this._semicolonfieldseparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessioncookiename: {
        value: cdktf.stringToHclTerraform(this._sessioncookiename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionlessfieldconsistency: {
        value: cdktf.stringToHclTerraform(this._sessionlessfieldconsistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionlessurlclosure: {
        value: cdktf.stringToHclTerraform(this._sessionlessurlclosure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signatures: {
        value: cdktf.stringToHclTerraform(this._signatures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlinjectionaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sqlinjectionaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sqlinjectionchecksqlwildchars: {
        value: cdktf.stringToHclTerraform(this._sqlinjectionchecksqlwildchars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlinjectiongrammar: {
        value: cdktf.stringToHclTerraform(this._sqlinjectiongrammar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlinjectiononlycheckfieldswithsqlchars: {
        value: cdktf.stringToHclTerraform(this._sqlinjectiononlycheckfieldswithsqlchars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlinjectionparsecomments: {
        value: cdktf.stringToHclTerraform(this._sqlinjectionparsecomments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlinjectionruletype: {
        value: cdktf.stringToHclTerraform(this._sqlinjectionruletype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlinjectiontransformspecialchars: {
        value: cdktf.stringToHclTerraform(this._sqlinjectiontransformspecialchars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlinjectiontype: {
        value: cdktf.stringToHclTerraform(this._sqlinjectiontype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starturlaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._starturlaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      starturlclosure: {
        value: cdktf.stringToHclTerraform(this._starturlclosure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streaming: {
        value: cdktf.stringToHclTerraform(this._streaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stripcomments: {
        value: cdktf.stringToHclTerraform(this._stripcomments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      striphtmlcomments: {
        value: cdktf.stringToHclTerraform(this._striphtmlcomments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stripxmlcomments: {
        value: cdktf.stringToHclTerraform(this._stripxmlcomments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace: {
        value: cdktf.stringToHclTerraform(this._trace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      urldecoderequestcookies: {
        value: cdktf.stringToHclTerraform(this._urldecoderequestcookies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usehtmlerrorobject: {
        value: cdktf.stringToHclTerraform(this._usehtmlerrorobject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verboseloglevel: {
        value: cdktf.stringToHclTerraform(this._verboseloglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlattachmentaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xmlattachmentaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      xmldosaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xmldosaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      xmlerrorobject: {
        value: cdktf.stringToHclTerraform(this._xmlerrorobject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlerrorstatuscode: {
        value: cdktf.numberToHclTerraform(this._xmlerrorstatuscode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlerrorstatusmessage: {
        value: cdktf.stringToHclTerraform(this._xmlerrorstatusmessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlformataction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xmlformataction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      xmlsoapfaultaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xmlsoapfaultaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      xmlsqlinjectionaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xmlsqlinjectionaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      xmlsqlinjectionchecksqlwildchars: {
        value: cdktf.stringToHclTerraform(this._xmlsqlinjectionchecksqlwildchars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlsqlinjectiononlycheckfieldswithsqlchars: {
        value: cdktf.stringToHclTerraform(this._xmlsqlinjectiononlycheckfieldswithsqlchars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlsqlinjectionparsecomments: {
        value: cdktf.stringToHclTerraform(this._xmlsqlinjectionparsecomments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlsqlinjectiontype: {
        value: cdktf.stringToHclTerraform(this._xmlsqlinjectiontype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlvalidationaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xmlvalidationaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      xmlwsiaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xmlwsiaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      xmlxssaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xmlxssaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
