// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbsiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#backupparentlist Gslbsite#backupparentlist}
  */
  readonly backupparentlist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#clip Gslbsite#clip}
  */
  readonly clip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#id Gslbsite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#metricexchange Gslbsite#metricexchange}
  */
  readonly metricexchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#naptrreplacementsuffix Gslbsite#naptrreplacementsuffix}
  */
  readonly naptrreplacementsuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#nwmetricexchange Gslbsite#nwmetricexchange}
  */
  readonly nwmetricexchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#parentsite Gslbsite#parentsite}
  */
  readonly parentsite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#publicclip Gslbsite#publicclip}
  */
  readonly publicclip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#publicip Gslbsite#publicip}
  */
  readonly publicip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#sessionexchange Gslbsite#sessionexchange}
  */
  readonly sessionexchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#siteipaddress Gslbsite#siteipaddress}
  */
  readonly siteipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#sitename Gslbsite#sitename}
  */
  readonly sitename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#sitepassword Gslbsite#sitepassword}
  */
  readonly sitepassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#sitetype Gslbsite#sitetype}
  */
  readonly sitetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#triggermonitor Gslbsite#triggermonitor}
  */
  readonly triggermonitor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite citrixadc_gslbsite}
*/
export class Gslbsite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbsite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbsite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbsite to import
  * @param importFromId The id of the existing Gslbsite that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbsite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbsite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbsite citrixadc_gslbsite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbsiteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbsiteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbsite',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupparentlist = config.backupparentlist;
    this._clip = config.clip;
    this._id = config.id;
    this._metricexchange = config.metricexchange;
    this._naptrreplacementsuffix = config.naptrreplacementsuffix;
    this._nwmetricexchange = config.nwmetricexchange;
    this._parentsite = config.parentsite;
    this._publicclip = config.publicclip;
    this._publicip = config.publicip;
    this._sessionexchange = config.sessionexchange;
    this._siteipaddress = config.siteipaddress;
    this._sitename = config.sitename;
    this._sitepassword = config.sitepassword;
    this._sitetype = config.sitetype;
    this._triggermonitor = config.triggermonitor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backupparentlist - computed: true, optional: true, required: false
  private _backupparentlist?: string[]; 
  public get backupparentlist() {
    return this.getListAttribute('backupparentlist');
  }
  public set backupparentlist(value: string[]) {
    this._backupparentlist = value;
  }
  public resetBackupparentlist() {
    this._backupparentlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupparentlistInput() {
    return this._backupparentlist;
  }

  // clip - computed: true, optional: true, required: false
  private _clip?: string; 
  public get clip() {
    return this.getStringAttribute('clip');
  }
  public set clip(value: string) {
    this._clip = value;
  }
  public resetClip() {
    this._clip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipInput() {
    return this._clip;
  }

  // curbackupparentip - computed: true, optional: false, required: false
  public get curbackupparentip() {
    return this.getStringAttribute('curbackupparentip');
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

  // metricexchange - computed: true, optional: true, required: false
  private _metricexchange?: string; 
  public get metricexchange() {
    return this.getStringAttribute('metricexchange');
  }
  public set metricexchange(value: string) {
    this._metricexchange = value;
  }
  public resetMetricexchange() {
    this._metricexchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricexchangeInput() {
    return this._metricexchange;
  }

  // naptrreplacementsuffix - computed: true, optional: true, required: false
  private _naptrreplacementsuffix?: string; 
  public get naptrreplacementsuffix() {
    return this.getStringAttribute('naptrreplacementsuffix');
  }
  public set naptrreplacementsuffix(value: string) {
    this._naptrreplacementsuffix = value;
  }
  public resetNaptrreplacementsuffix() {
    this._naptrreplacementsuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrreplacementsuffixInput() {
    return this._naptrreplacementsuffix;
  }

  // nwmetricexchange - computed: true, optional: true, required: false
  private _nwmetricexchange?: string; 
  public get nwmetricexchange() {
    return this.getStringAttribute('nwmetricexchange');
  }
  public set nwmetricexchange(value: string) {
    this._nwmetricexchange = value;
  }
  public resetNwmetricexchange() {
    this._nwmetricexchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwmetricexchangeInput() {
    return this._nwmetricexchange;
  }

  // oldname - computed: true, optional: false, required: false
  public get oldname() {
    return this.getStringAttribute('oldname');
  }

  // parentsite - computed: true, optional: true, required: false
  private _parentsite?: string; 
  public get parentsite() {
    return this.getStringAttribute('parentsite');
  }
  public set parentsite(value: string) {
    this._parentsite = value;
  }
  public resetParentsite() {
    this._parentsite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentsiteInput() {
    return this._parentsite;
  }

  // persistencemepstatus - computed: true, optional: false, required: false
  public get persistencemepstatus() {
    return this.getStringAttribute('persistencemepstatus');
  }

  // publicclip - computed: true, optional: true, required: false
  private _publicclip?: string; 
  public get publicclip() {
    return this.getStringAttribute('publicclip');
  }
  public set publicclip(value: string) {
    this._publicclip = value;
  }
  public resetPublicclip() {
    this._publicclip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicclipInput() {
    return this._publicclip;
  }

  // publicip - computed: true, optional: true, required: false
  private _publicip?: string; 
  public get publicip() {
    return this.getStringAttribute('publicip');
  }
  public set publicip(value: string) {
    this._publicip = value;
  }
  public resetPublicip() {
    this._publicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicipInput() {
    return this._publicip;
  }

  // sessionexchange - computed: true, optional: true, required: false
  private _sessionexchange?: string; 
  public get sessionexchange() {
    return this.getStringAttribute('sessionexchange');
  }
  public set sessionexchange(value: string) {
    this._sessionexchange = value;
  }
  public resetSessionexchange() {
    this._sessionexchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionexchangeInput() {
    return this._sessionexchange;
  }

  // siteipaddress - computed: true, optional: true, required: false
  private _siteipaddress?: string; 
  public get siteipaddress() {
    return this.getStringAttribute('siteipaddress');
  }
  public set siteipaddress(value: string) {
    this._siteipaddress = value;
  }
  public resetSiteipaddress() {
    this._siteipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteipaddressInput() {
    return this._siteipaddress;
  }

  // sitename - computed: true, optional: true, required: false
  private _sitename?: string; 
  public get sitename() {
    return this.getStringAttribute('sitename');
  }
  public set sitename(value: string) {
    this._sitename = value;
  }
  public resetSitename() {
    this._sitename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitenameInput() {
    return this._sitename;
  }

  // sitepassword - computed: false, optional: true, required: false
  private _sitepassword?: string; 
  public get sitepassword() {
    return this.getStringAttribute('sitepassword');
  }
  public set sitepassword(value: string) {
    this._sitepassword = value;
  }
  public resetSitepassword() {
    this._sitepassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitepasswordInput() {
    return this._sitepassword;
  }

  // sitestate - computed: true, optional: false, required: false
  public get sitestate() {
    return this.getStringAttribute('sitestate');
  }

  // sitetype - computed: true, optional: true, required: false
  private _sitetype?: string; 
  public get sitetype() {
    return this.getStringAttribute('sitetype');
  }
  public set sitetype(value: string) {
    this._sitetype = value;
  }
  public resetSitetype() {
    this._sitetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitetypeInput() {
    return this._sitetype;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // triggermonitor - computed: true, optional: true, required: false
  private _triggermonitor?: string; 
  public get triggermonitor() {
    return this.getStringAttribute('triggermonitor');
  }
  public set triggermonitor(value: string) {
    this._triggermonitor = value;
  }
  public resetTriggermonitor() {
    this._triggermonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggermonitorInput() {
    return this._triggermonitor;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backupparentlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupparentlist),
      clip: cdktf.stringToTerraform(this._clip),
      id: cdktf.stringToTerraform(this._id),
      metricexchange: cdktf.stringToTerraform(this._metricexchange),
      naptrreplacementsuffix: cdktf.stringToTerraform(this._naptrreplacementsuffix),
      nwmetricexchange: cdktf.stringToTerraform(this._nwmetricexchange),
      parentsite: cdktf.stringToTerraform(this._parentsite),
      publicclip: cdktf.stringToTerraform(this._publicclip),
      publicip: cdktf.stringToTerraform(this._publicip),
      sessionexchange: cdktf.stringToTerraform(this._sessionexchange),
      siteipaddress: cdktf.stringToTerraform(this._siteipaddress),
      sitename: cdktf.stringToTerraform(this._sitename),
      sitepassword: cdktf.stringToTerraform(this._sitepassword),
      sitetype: cdktf.stringToTerraform(this._sitetype),
      triggermonitor: cdktf.stringToTerraform(this._triggermonitor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backupparentlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupparentlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      clip: {
        value: cdktf.stringToHclTerraform(this._clip),
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
      metricexchange: {
        value: cdktf.stringToHclTerraform(this._metricexchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      naptrreplacementsuffix: {
        value: cdktf.stringToHclTerraform(this._naptrreplacementsuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nwmetricexchange: {
        value: cdktf.stringToHclTerraform(this._nwmetricexchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parentsite: {
        value: cdktf.stringToHclTerraform(this._parentsite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicclip: {
        value: cdktf.stringToHclTerraform(this._publicclip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicip: {
        value: cdktf.stringToHclTerraform(this._publicip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionexchange: {
        value: cdktf.stringToHclTerraform(this._sessionexchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteipaddress: {
        value: cdktf.stringToHclTerraform(this._siteipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitename: {
        value: cdktf.stringToHclTerraform(this._sitename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitepassword: {
        value: cdktf.stringToHclTerraform(this._sitepassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitetype: {
        value: cdktf.stringToHclTerraform(this._sitetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggermonitor: {
        value: cdktf.stringToHclTerraform(this._triggermonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
