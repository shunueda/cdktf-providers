// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationsamlactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#artifactresolutionserviceurl Authenticationsamlaction#artifactresolutionserviceurl}
  */
  readonly artifactresolutionserviceurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute1 Authenticationsamlaction#attribute1}
  */
  readonly attribute1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute10 Authenticationsamlaction#attribute10}
  */
  readonly attribute10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute11 Authenticationsamlaction#attribute11}
  */
  readonly attribute11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute12 Authenticationsamlaction#attribute12}
  */
  readonly attribute12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute13 Authenticationsamlaction#attribute13}
  */
  readonly attribute13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute14 Authenticationsamlaction#attribute14}
  */
  readonly attribute14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute15 Authenticationsamlaction#attribute15}
  */
  readonly attribute15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute16 Authenticationsamlaction#attribute16}
  */
  readonly attribute16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute2 Authenticationsamlaction#attribute2}
  */
  readonly attribute2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute3 Authenticationsamlaction#attribute3}
  */
  readonly attribute3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute4 Authenticationsamlaction#attribute4}
  */
  readonly attribute4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute5 Authenticationsamlaction#attribute5}
  */
  readonly attribute5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute6 Authenticationsamlaction#attribute6}
  */
  readonly attribute6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute7 Authenticationsamlaction#attribute7}
  */
  readonly attribute7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute8 Authenticationsamlaction#attribute8}
  */
  readonly attribute8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attribute9 Authenticationsamlaction#attribute9}
  */
  readonly attribute9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attributeconsumingserviceindex Authenticationsamlaction#attributeconsumingserviceindex}
  */
  readonly attributeconsumingserviceindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#attributes Authenticationsamlaction#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#audience Authenticationsamlaction#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#authnctxclassref Authenticationsamlaction#authnctxclassref}
  */
  readonly authnctxclassref?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#customauthnctxclassref Authenticationsamlaction#customauthnctxclassref}
  */
  readonly customauthnctxclassref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#defaultauthenticationgroup Authenticationsamlaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#digestmethod Authenticationsamlaction#digestmethod}
  */
  readonly digestmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#enforceusername Authenticationsamlaction#enforceusername}
  */
  readonly enforceusername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#forceauthn Authenticationsamlaction#forceauthn}
  */
  readonly forceauthn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#groupnamefield Authenticationsamlaction#groupnamefield}
  */
  readonly groupnamefield?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#id Authenticationsamlaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#logoutbinding Authenticationsamlaction#logoutbinding}
  */
  readonly logoutbinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#logouturl Authenticationsamlaction#logouturl}
  */
  readonly logouturl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#metadatarefreshinterval Authenticationsamlaction#metadatarefreshinterval}
  */
  readonly metadatarefreshinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#metadataurl Authenticationsamlaction#metadataurl}
  */
  readonly metadataurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#name Authenticationsamlaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#preferredbindtype Authenticationsamlaction#preferredbindtype}
  */
  readonly preferredbindtype?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#relaystaterule Authenticationsamlaction#relaystaterule}
  */
  readonly relaystaterule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#requestedauthncontext Authenticationsamlaction#requestedauthncontext}
  */
  readonly requestedauthncontext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samlacsindex Authenticationsamlaction#samlacsindex}
  */
  readonly samlacsindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samlbinding Authenticationsamlaction#samlbinding}
  */
  readonly samlbinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samlidpcertname Authenticationsamlaction#samlidpcertname}
  */
  readonly samlidpcertname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samlissuername Authenticationsamlaction#samlissuername}
  */
  readonly samlissuername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samlredirecturl Authenticationsamlaction#samlredirecturl}
  */
  readonly samlredirecturl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samlrejectunsignedassertion Authenticationsamlaction#samlrejectunsignedassertion}
  */
  readonly samlrejectunsignedassertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samlsigningcertname Authenticationsamlaction#samlsigningcertname}
  */
  readonly samlsigningcertname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samltwofactor Authenticationsamlaction#samltwofactor}
  */
  readonly samltwofactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#samluserfield Authenticationsamlaction#samluserfield}
  */
  readonly samluserfield?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#sendthumbprint Authenticationsamlaction#sendthumbprint}
  */
  readonly sendthumbprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#signaturealg Authenticationsamlaction#signaturealg}
  */
  readonly signaturealg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#skewtime Authenticationsamlaction#skewtime}
  */
  readonly skewtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#statechecks Authenticationsamlaction#statechecks}
  */
  readonly statechecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#storesamlresponse Authenticationsamlaction#storesamlresponse}
  */
  readonly storesamlresponse?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction citrixadc_authenticationsamlaction}
*/
export class Authenticationsamlaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationsamlaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationsamlaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationsamlaction to import
  * @param importFromId The id of the existing Authenticationsamlaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationsamlaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationsamlaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationsamlaction citrixadc_authenticationsamlaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationsamlactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationsamlactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationsamlaction',
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
    this._artifactresolutionserviceurl = config.artifactresolutionserviceurl;
    this._attribute1 = config.attribute1;
    this._attribute10 = config.attribute10;
    this._attribute11 = config.attribute11;
    this._attribute12 = config.attribute12;
    this._attribute13 = config.attribute13;
    this._attribute14 = config.attribute14;
    this._attribute15 = config.attribute15;
    this._attribute16 = config.attribute16;
    this._attribute2 = config.attribute2;
    this._attribute3 = config.attribute3;
    this._attribute4 = config.attribute4;
    this._attribute5 = config.attribute5;
    this._attribute6 = config.attribute6;
    this._attribute7 = config.attribute7;
    this._attribute8 = config.attribute8;
    this._attribute9 = config.attribute9;
    this._attributeconsumingserviceindex = config.attributeconsumingserviceindex;
    this._attributes = config.attributes;
    this._audience = config.audience;
    this._authnctxclassref = config.authnctxclassref;
    this._customauthnctxclassref = config.customauthnctxclassref;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._digestmethod = config.digestmethod;
    this._enforceusername = config.enforceusername;
    this._forceauthn = config.forceauthn;
    this._groupnamefield = config.groupnamefield;
    this._id = config.id;
    this._logoutbinding = config.logoutbinding;
    this._logouturl = config.logouturl;
    this._metadatarefreshinterval = config.metadatarefreshinterval;
    this._metadataurl = config.metadataurl;
    this._name = config.name;
    this._preferredbindtype = config.preferredbindtype;
    this._relaystaterule = config.relaystaterule;
    this._requestedauthncontext = config.requestedauthncontext;
    this._samlacsindex = config.samlacsindex;
    this._samlbinding = config.samlbinding;
    this._samlidpcertname = config.samlidpcertname;
    this._samlissuername = config.samlissuername;
    this._samlredirecturl = config.samlredirecturl;
    this._samlrejectunsignedassertion = config.samlrejectunsignedassertion;
    this._samlsigningcertname = config.samlsigningcertname;
    this._samltwofactor = config.samltwofactor;
    this._samluserfield = config.samluserfield;
    this._sendthumbprint = config.sendthumbprint;
    this._signaturealg = config.signaturealg;
    this._skewtime = config.skewtime;
    this._statechecks = config.statechecks;
    this._storesamlresponse = config.storesamlresponse;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifactresolutionserviceurl - computed: true, optional: true, required: false
  private _artifactresolutionserviceurl?: string; 
  public get artifactresolutionserviceurl() {
    return this.getStringAttribute('artifactresolutionserviceurl');
  }
  public set artifactresolutionserviceurl(value: string) {
    this._artifactresolutionserviceurl = value;
  }
  public resetArtifactresolutionserviceurl() {
    this._artifactresolutionserviceurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactresolutionserviceurlInput() {
    return this._artifactresolutionserviceurl;
  }

  // attribute1 - computed: true, optional: true, required: false
  private _attribute1?: string; 
  public get attribute1() {
    return this.getStringAttribute('attribute1');
  }
  public set attribute1(value: string) {
    this._attribute1 = value;
  }
  public resetAttribute1() {
    this._attribute1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute1Input() {
    return this._attribute1;
  }

  // attribute10 - computed: true, optional: true, required: false
  private _attribute10?: string; 
  public get attribute10() {
    return this.getStringAttribute('attribute10');
  }
  public set attribute10(value: string) {
    this._attribute10 = value;
  }
  public resetAttribute10() {
    this._attribute10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute10Input() {
    return this._attribute10;
  }

  // attribute11 - computed: true, optional: true, required: false
  private _attribute11?: string; 
  public get attribute11() {
    return this.getStringAttribute('attribute11');
  }
  public set attribute11(value: string) {
    this._attribute11 = value;
  }
  public resetAttribute11() {
    this._attribute11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute11Input() {
    return this._attribute11;
  }

  // attribute12 - computed: true, optional: true, required: false
  private _attribute12?: string; 
  public get attribute12() {
    return this.getStringAttribute('attribute12');
  }
  public set attribute12(value: string) {
    this._attribute12 = value;
  }
  public resetAttribute12() {
    this._attribute12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute12Input() {
    return this._attribute12;
  }

  // attribute13 - computed: true, optional: true, required: false
  private _attribute13?: string; 
  public get attribute13() {
    return this.getStringAttribute('attribute13');
  }
  public set attribute13(value: string) {
    this._attribute13 = value;
  }
  public resetAttribute13() {
    this._attribute13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute13Input() {
    return this._attribute13;
  }

  // attribute14 - computed: true, optional: true, required: false
  private _attribute14?: string; 
  public get attribute14() {
    return this.getStringAttribute('attribute14');
  }
  public set attribute14(value: string) {
    this._attribute14 = value;
  }
  public resetAttribute14() {
    this._attribute14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute14Input() {
    return this._attribute14;
  }

  // attribute15 - computed: true, optional: true, required: false
  private _attribute15?: string; 
  public get attribute15() {
    return this.getStringAttribute('attribute15');
  }
  public set attribute15(value: string) {
    this._attribute15 = value;
  }
  public resetAttribute15() {
    this._attribute15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute15Input() {
    return this._attribute15;
  }

  // attribute16 - computed: true, optional: true, required: false
  private _attribute16?: string; 
  public get attribute16() {
    return this.getStringAttribute('attribute16');
  }
  public set attribute16(value: string) {
    this._attribute16 = value;
  }
  public resetAttribute16() {
    this._attribute16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute16Input() {
    return this._attribute16;
  }

  // attribute2 - computed: true, optional: true, required: false
  private _attribute2?: string; 
  public get attribute2() {
    return this.getStringAttribute('attribute2');
  }
  public set attribute2(value: string) {
    this._attribute2 = value;
  }
  public resetAttribute2() {
    this._attribute2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute2Input() {
    return this._attribute2;
  }

  // attribute3 - computed: true, optional: true, required: false
  private _attribute3?: string; 
  public get attribute3() {
    return this.getStringAttribute('attribute3');
  }
  public set attribute3(value: string) {
    this._attribute3 = value;
  }
  public resetAttribute3() {
    this._attribute3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute3Input() {
    return this._attribute3;
  }

  // attribute4 - computed: true, optional: true, required: false
  private _attribute4?: string; 
  public get attribute4() {
    return this.getStringAttribute('attribute4');
  }
  public set attribute4(value: string) {
    this._attribute4 = value;
  }
  public resetAttribute4() {
    this._attribute4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute4Input() {
    return this._attribute4;
  }

  // attribute5 - computed: true, optional: true, required: false
  private _attribute5?: string; 
  public get attribute5() {
    return this.getStringAttribute('attribute5');
  }
  public set attribute5(value: string) {
    this._attribute5 = value;
  }
  public resetAttribute5() {
    this._attribute5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute5Input() {
    return this._attribute5;
  }

  // attribute6 - computed: true, optional: true, required: false
  private _attribute6?: string; 
  public get attribute6() {
    return this.getStringAttribute('attribute6');
  }
  public set attribute6(value: string) {
    this._attribute6 = value;
  }
  public resetAttribute6() {
    this._attribute6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute6Input() {
    return this._attribute6;
  }

  // attribute7 - computed: true, optional: true, required: false
  private _attribute7?: string; 
  public get attribute7() {
    return this.getStringAttribute('attribute7');
  }
  public set attribute7(value: string) {
    this._attribute7 = value;
  }
  public resetAttribute7() {
    this._attribute7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute7Input() {
    return this._attribute7;
  }

  // attribute8 - computed: true, optional: true, required: false
  private _attribute8?: string; 
  public get attribute8() {
    return this.getStringAttribute('attribute8');
  }
  public set attribute8(value: string) {
    this._attribute8 = value;
  }
  public resetAttribute8() {
    this._attribute8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute8Input() {
    return this._attribute8;
  }

  // attribute9 - computed: true, optional: true, required: false
  private _attribute9?: string; 
  public get attribute9() {
    return this.getStringAttribute('attribute9');
  }
  public set attribute9(value: string) {
    this._attribute9 = value;
  }
  public resetAttribute9() {
    this._attribute9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute9Input() {
    return this._attribute9;
  }

  // attributeconsumingserviceindex - computed: true, optional: true, required: false
  private _attributeconsumingserviceindex?: number; 
  public get attributeconsumingserviceindex() {
    return this.getNumberAttribute('attributeconsumingserviceindex');
  }
  public set attributeconsumingserviceindex(value: number) {
    this._attributeconsumingserviceindex = value;
  }
  public resetAttributeconsumingserviceindex() {
    this._attributeconsumingserviceindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeconsumingserviceindexInput() {
    return this._attributeconsumingserviceindex;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authnctxclassref - computed: true, optional: true, required: false
  private _authnctxclassref?: string[]; 
  public get authnctxclassref() {
    return this.getListAttribute('authnctxclassref');
  }
  public set authnctxclassref(value: string[]) {
    this._authnctxclassref = value;
  }
  public resetAuthnctxclassref() {
    this._authnctxclassref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnctxclassrefInput() {
    return this._authnctxclassref;
  }

  // customauthnctxclassref - computed: true, optional: true, required: false
  private _customauthnctxclassref?: string; 
  public get customauthnctxclassref() {
    return this.getStringAttribute('customauthnctxclassref');
  }
  public set customauthnctxclassref(value: string) {
    this._customauthnctxclassref = value;
  }
  public resetCustomauthnctxclassref() {
    this._customauthnctxclassref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customauthnctxclassrefInput() {
    return this._customauthnctxclassref;
  }

  // defaultauthenticationgroup - computed: true, optional: true, required: false
  private _defaultauthenticationgroup?: string; 
  public get defaultauthenticationgroup() {
    return this.getStringAttribute('defaultauthenticationgroup');
  }
  public set defaultauthenticationgroup(value: string) {
    this._defaultauthenticationgroup = value;
  }
  public resetDefaultauthenticationgroup() {
    this._defaultauthenticationgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthenticationgroupInput() {
    return this._defaultauthenticationgroup;
  }

  // digestmethod - computed: true, optional: true, required: false
  private _digestmethod?: string; 
  public get digestmethod() {
    return this.getStringAttribute('digestmethod');
  }
  public set digestmethod(value: string) {
    this._digestmethod = value;
  }
  public resetDigestmethod() {
    this._digestmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestmethodInput() {
    return this._digestmethod;
  }

  // enforceusername - computed: true, optional: true, required: false
  private _enforceusername?: string; 
  public get enforceusername() {
    return this.getStringAttribute('enforceusername');
  }
  public set enforceusername(value: string) {
    this._enforceusername = value;
  }
  public resetEnforceusername() {
    this._enforceusername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceusernameInput() {
    return this._enforceusername;
  }

  // forceauthn - computed: true, optional: true, required: false
  private _forceauthn?: string; 
  public get forceauthn() {
    return this.getStringAttribute('forceauthn');
  }
  public set forceauthn(value: string) {
    this._forceauthn = value;
  }
  public resetForceauthn() {
    this._forceauthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceauthnInput() {
    return this._forceauthn;
  }

  // groupnamefield - computed: true, optional: true, required: false
  private _groupnamefield?: string; 
  public get groupnamefield() {
    return this.getStringAttribute('groupnamefield');
  }
  public set groupnamefield(value: string) {
    this._groupnamefield = value;
  }
  public resetGroupnamefield() {
    this._groupnamefield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnamefieldInput() {
    return this._groupnamefield;
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

  // logoutbinding - computed: true, optional: true, required: false
  private _logoutbinding?: string; 
  public get logoutbinding() {
    return this.getStringAttribute('logoutbinding');
  }
  public set logoutbinding(value: string) {
    this._logoutbinding = value;
  }
  public resetLogoutbinding() {
    this._logoutbinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutbindingInput() {
    return this._logoutbinding;
  }

  // logouturl - computed: true, optional: true, required: false
  private _logouturl?: string; 
  public get logouturl() {
    return this.getStringAttribute('logouturl');
  }
  public set logouturl(value: string) {
    this._logouturl = value;
  }
  public resetLogouturl() {
    this._logouturl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logouturlInput() {
    return this._logouturl;
  }

  // metadatarefreshinterval - computed: true, optional: true, required: false
  private _metadatarefreshinterval?: number; 
  public get metadatarefreshinterval() {
    return this.getNumberAttribute('metadatarefreshinterval');
  }
  public set metadatarefreshinterval(value: number) {
    this._metadatarefreshinterval = value;
  }
  public resetMetadatarefreshinterval() {
    this._metadatarefreshinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadatarefreshintervalInput() {
    return this._metadatarefreshinterval;
  }

  // metadataurl - computed: true, optional: true, required: false
  private _metadataurl?: string; 
  public get metadataurl() {
    return this.getStringAttribute('metadataurl');
  }
  public set metadataurl(value: string) {
    this._metadataurl = value;
  }
  public resetMetadataurl() {
    this._metadataurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataurlInput() {
    return this._metadataurl;
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

  // preferredbindtype - computed: true, optional: true, required: false
  private _preferredbindtype?: string[]; 
  public get preferredbindtype() {
    return this.getListAttribute('preferredbindtype');
  }
  public set preferredbindtype(value: string[]) {
    this._preferredbindtype = value;
  }
  public resetPreferredbindtype() {
    this._preferredbindtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredbindtypeInput() {
    return this._preferredbindtype;
  }

  // relaystaterule - computed: true, optional: true, required: false
  private _relaystaterule?: string; 
  public get relaystaterule() {
    return this.getStringAttribute('relaystaterule');
  }
  public set relaystaterule(value: string) {
    this._relaystaterule = value;
  }
  public resetRelaystaterule() {
    this._relaystaterule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaystateruleInput() {
    return this._relaystaterule;
  }

  // requestedauthncontext - computed: true, optional: true, required: false
  private _requestedauthncontext?: string; 
  public get requestedauthncontext() {
    return this.getStringAttribute('requestedauthncontext');
  }
  public set requestedauthncontext(value: string) {
    this._requestedauthncontext = value;
  }
  public resetRequestedauthncontext() {
    this._requestedauthncontext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedauthncontextInput() {
    return this._requestedauthncontext;
  }

  // samlacsindex - computed: true, optional: true, required: false
  private _samlacsindex?: number; 
  public get samlacsindex() {
    return this.getNumberAttribute('samlacsindex');
  }
  public set samlacsindex(value: number) {
    this._samlacsindex = value;
  }
  public resetSamlacsindex() {
    this._samlacsindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlacsindexInput() {
    return this._samlacsindex;
  }

  // samlbinding - computed: true, optional: true, required: false
  private _samlbinding?: string; 
  public get samlbinding() {
    return this.getStringAttribute('samlbinding');
  }
  public set samlbinding(value: string) {
    this._samlbinding = value;
  }
  public resetSamlbinding() {
    this._samlbinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlbindingInput() {
    return this._samlbinding;
  }

  // samlidpcertname - computed: true, optional: true, required: false
  private _samlidpcertname?: string; 
  public get samlidpcertname() {
    return this.getStringAttribute('samlidpcertname');
  }
  public set samlidpcertname(value: string) {
    this._samlidpcertname = value;
  }
  public resetSamlidpcertname() {
    this._samlidpcertname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlidpcertnameInput() {
    return this._samlidpcertname;
  }

  // samlissuername - computed: true, optional: true, required: false
  private _samlissuername?: string; 
  public get samlissuername() {
    return this.getStringAttribute('samlissuername');
  }
  public set samlissuername(value: string) {
    this._samlissuername = value;
  }
  public resetSamlissuername() {
    this._samlissuername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlissuernameInput() {
    return this._samlissuername;
  }

  // samlredirecturl - computed: true, optional: true, required: false
  private _samlredirecturl?: string; 
  public get samlredirecturl() {
    return this.getStringAttribute('samlredirecturl');
  }
  public set samlredirecturl(value: string) {
    this._samlredirecturl = value;
  }
  public resetSamlredirecturl() {
    this._samlredirecturl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlredirecturlInput() {
    return this._samlredirecturl;
  }

  // samlrejectunsignedassertion - computed: true, optional: true, required: false
  private _samlrejectunsignedassertion?: string; 
  public get samlrejectunsignedassertion() {
    return this.getStringAttribute('samlrejectunsignedassertion');
  }
  public set samlrejectunsignedassertion(value: string) {
    this._samlrejectunsignedassertion = value;
  }
  public resetSamlrejectunsignedassertion() {
    this._samlrejectunsignedassertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlrejectunsignedassertionInput() {
    return this._samlrejectunsignedassertion;
  }

  // samlsigningcertname - computed: true, optional: true, required: false
  private _samlsigningcertname?: string; 
  public get samlsigningcertname() {
    return this.getStringAttribute('samlsigningcertname');
  }
  public set samlsigningcertname(value: string) {
    this._samlsigningcertname = value;
  }
  public resetSamlsigningcertname() {
    this._samlsigningcertname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlsigningcertnameInput() {
    return this._samlsigningcertname;
  }

  // samltwofactor - computed: true, optional: true, required: false
  private _samltwofactor?: string; 
  public get samltwofactor() {
    return this.getStringAttribute('samltwofactor');
  }
  public set samltwofactor(value: string) {
    this._samltwofactor = value;
  }
  public resetSamltwofactor() {
    this._samltwofactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samltwofactorInput() {
    return this._samltwofactor;
  }

  // samluserfield - computed: true, optional: true, required: false
  private _samluserfield?: string; 
  public get samluserfield() {
    return this.getStringAttribute('samluserfield');
  }
  public set samluserfield(value: string) {
    this._samluserfield = value;
  }
  public resetSamluserfield() {
    this._samluserfield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samluserfieldInput() {
    return this._samluserfield;
  }

  // sendthumbprint - computed: true, optional: true, required: false
  private _sendthumbprint?: string; 
  public get sendthumbprint() {
    return this.getStringAttribute('sendthumbprint');
  }
  public set sendthumbprint(value: string) {
    this._sendthumbprint = value;
  }
  public resetSendthumbprint() {
    this._sendthumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendthumbprintInput() {
    return this._sendthumbprint;
  }

  // signaturealg - computed: true, optional: true, required: false
  private _signaturealg?: string; 
  public get signaturealg() {
    return this.getStringAttribute('signaturealg');
  }
  public set signaturealg(value: string) {
    this._signaturealg = value;
  }
  public resetSignaturealg() {
    this._signaturealg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturealgInput() {
    return this._signaturealg;
  }

  // skewtime - computed: true, optional: true, required: false
  private _skewtime?: number; 
  public get skewtime() {
    return this.getNumberAttribute('skewtime');
  }
  public set skewtime(value: number) {
    this._skewtime = value;
  }
  public resetSkewtime() {
    this._skewtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewtimeInput() {
    return this._skewtime;
  }

  // statechecks - computed: true, optional: true, required: false
  private _statechecks?: string; 
  public get statechecks() {
    return this.getStringAttribute('statechecks');
  }
  public set statechecks(value: string) {
    this._statechecks = value;
  }
  public resetStatechecks() {
    this._statechecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statechecksInput() {
    return this._statechecks;
  }

  // storesamlresponse - computed: true, optional: true, required: false
  private _storesamlresponse?: string; 
  public get storesamlresponse() {
    return this.getStringAttribute('storesamlresponse');
  }
  public set storesamlresponse(value: string) {
    this._storesamlresponse = value;
  }
  public resetStoresamlresponse() {
    this._storesamlresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storesamlresponseInput() {
    return this._storesamlresponse;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifactresolutionserviceurl: cdktf.stringToTerraform(this._artifactresolutionserviceurl),
      attribute1: cdktf.stringToTerraform(this._attribute1),
      attribute10: cdktf.stringToTerraform(this._attribute10),
      attribute11: cdktf.stringToTerraform(this._attribute11),
      attribute12: cdktf.stringToTerraform(this._attribute12),
      attribute13: cdktf.stringToTerraform(this._attribute13),
      attribute14: cdktf.stringToTerraform(this._attribute14),
      attribute15: cdktf.stringToTerraform(this._attribute15),
      attribute16: cdktf.stringToTerraform(this._attribute16),
      attribute2: cdktf.stringToTerraform(this._attribute2),
      attribute3: cdktf.stringToTerraform(this._attribute3),
      attribute4: cdktf.stringToTerraform(this._attribute4),
      attribute5: cdktf.stringToTerraform(this._attribute5),
      attribute6: cdktf.stringToTerraform(this._attribute6),
      attribute7: cdktf.stringToTerraform(this._attribute7),
      attribute8: cdktf.stringToTerraform(this._attribute8),
      attribute9: cdktf.stringToTerraform(this._attribute9),
      attributeconsumingserviceindex: cdktf.numberToTerraform(this._attributeconsumingserviceindex),
      attributes: cdktf.stringToTerraform(this._attributes),
      audience: cdktf.stringToTerraform(this._audience),
      authnctxclassref: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authnctxclassref),
      customauthnctxclassref: cdktf.stringToTerraform(this._customauthnctxclassref),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      digestmethod: cdktf.stringToTerraform(this._digestmethod),
      enforceusername: cdktf.stringToTerraform(this._enforceusername),
      forceauthn: cdktf.stringToTerraform(this._forceauthn),
      groupnamefield: cdktf.stringToTerraform(this._groupnamefield),
      id: cdktf.stringToTerraform(this._id),
      logoutbinding: cdktf.stringToTerraform(this._logoutbinding),
      logouturl: cdktf.stringToTerraform(this._logouturl),
      metadatarefreshinterval: cdktf.numberToTerraform(this._metadatarefreshinterval),
      metadataurl: cdktf.stringToTerraform(this._metadataurl),
      name: cdktf.stringToTerraform(this._name),
      preferredbindtype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredbindtype),
      relaystaterule: cdktf.stringToTerraform(this._relaystaterule),
      requestedauthncontext: cdktf.stringToTerraform(this._requestedauthncontext),
      samlacsindex: cdktf.numberToTerraform(this._samlacsindex),
      samlbinding: cdktf.stringToTerraform(this._samlbinding),
      samlidpcertname: cdktf.stringToTerraform(this._samlidpcertname),
      samlissuername: cdktf.stringToTerraform(this._samlissuername),
      samlredirecturl: cdktf.stringToTerraform(this._samlredirecturl),
      samlrejectunsignedassertion: cdktf.stringToTerraform(this._samlrejectunsignedassertion),
      samlsigningcertname: cdktf.stringToTerraform(this._samlsigningcertname),
      samltwofactor: cdktf.stringToTerraform(this._samltwofactor),
      samluserfield: cdktf.stringToTerraform(this._samluserfield),
      sendthumbprint: cdktf.stringToTerraform(this._sendthumbprint),
      signaturealg: cdktf.stringToTerraform(this._signaturealg),
      skewtime: cdktf.numberToTerraform(this._skewtime),
      statechecks: cdktf.stringToTerraform(this._statechecks),
      storesamlresponse: cdktf.stringToTerraform(this._storesamlresponse),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifactresolutionserviceurl: {
        value: cdktf.stringToHclTerraform(this._artifactresolutionserviceurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute1: {
        value: cdktf.stringToHclTerraform(this._attribute1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute10: {
        value: cdktf.stringToHclTerraform(this._attribute10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute11: {
        value: cdktf.stringToHclTerraform(this._attribute11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute12: {
        value: cdktf.stringToHclTerraform(this._attribute12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute13: {
        value: cdktf.stringToHclTerraform(this._attribute13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute14: {
        value: cdktf.stringToHclTerraform(this._attribute14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute15: {
        value: cdktf.stringToHclTerraform(this._attribute15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute16: {
        value: cdktf.stringToHclTerraform(this._attribute16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute2: {
        value: cdktf.stringToHclTerraform(this._attribute2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute3: {
        value: cdktf.stringToHclTerraform(this._attribute3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute4: {
        value: cdktf.stringToHclTerraform(this._attribute4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute5: {
        value: cdktf.stringToHclTerraform(this._attribute5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute6: {
        value: cdktf.stringToHclTerraform(this._attribute6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute7: {
        value: cdktf.stringToHclTerraform(this._attribute7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute8: {
        value: cdktf.stringToHclTerraform(this._attribute8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute9: {
        value: cdktf.stringToHclTerraform(this._attribute9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributeconsumingserviceindex: {
        value: cdktf.numberToHclTerraform(this._attributeconsumingserviceindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authnctxclassref: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authnctxclassref),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      customauthnctxclassref: {
        value: cdktf.stringToHclTerraform(this._customauthnctxclassref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultauthenticationgroup: {
        value: cdktf.stringToHclTerraform(this._defaultauthenticationgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digestmethod: {
        value: cdktf.stringToHclTerraform(this._digestmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforceusername: {
        value: cdktf.stringToHclTerraform(this._enforceusername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forceauthn: {
        value: cdktf.stringToHclTerraform(this._forceauthn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupnamefield: {
        value: cdktf.stringToHclTerraform(this._groupnamefield),
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
      logoutbinding: {
        value: cdktf.stringToHclTerraform(this._logoutbinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logouturl: {
        value: cdktf.stringToHclTerraform(this._logouturl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadatarefreshinterval: {
        value: cdktf.numberToHclTerraform(this._metadatarefreshinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadataurl: {
        value: cdktf.stringToHclTerraform(this._metadataurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferredbindtype: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredbindtype),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      relaystaterule: {
        value: cdktf.stringToHclTerraform(this._relaystaterule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestedauthncontext: {
        value: cdktf.stringToHclTerraform(this._requestedauthncontext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlacsindex: {
        value: cdktf.numberToHclTerraform(this._samlacsindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      samlbinding: {
        value: cdktf.stringToHclTerraform(this._samlbinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlidpcertname: {
        value: cdktf.stringToHclTerraform(this._samlidpcertname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlissuername: {
        value: cdktf.stringToHclTerraform(this._samlissuername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlredirecturl: {
        value: cdktf.stringToHclTerraform(this._samlredirecturl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlrejectunsignedassertion: {
        value: cdktf.stringToHclTerraform(this._samlrejectunsignedassertion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlsigningcertname: {
        value: cdktf.stringToHclTerraform(this._samlsigningcertname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samltwofactor: {
        value: cdktf.stringToHclTerraform(this._samltwofactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samluserfield: {
        value: cdktf.stringToHclTerraform(this._samluserfield),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sendthumbprint: {
        value: cdktf.stringToHclTerraform(this._sendthumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signaturealg: {
        value: cdktf.stringToHclTerraform(this._signaturealg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skewtime: {
        value: cdktf.numberToHclTerraform(this._skewtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statechecks: {
        value: cdktf.stringToHclTerraform(this._statechecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storesamlresponse: {
        value: cdktf.stringToHclTerraform(this._storesamlresponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
