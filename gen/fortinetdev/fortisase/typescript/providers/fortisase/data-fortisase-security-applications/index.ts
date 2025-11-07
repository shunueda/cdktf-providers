// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#behavior DataFortisaseSecurityApplications#behavior}
  */
  readonly behavior?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#category DataFortisaseSecurityApplications#category}
  */
  readonly category?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#ftntid DataFortisaseSecurityApplications#ftntid}
  */
  readonly ftntid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#icon_class DataFortisaseSecurityApplications#icon_class}
  */
  readonly iconClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#is_cloud_application DataFortisaseSecurityApplications#is_cloud_application}
  */
  readonly isCloudApplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#is_deep_inspection_app DataFortisaseSecurityApplications#is_deep_inspection_app}
  */
  readonly isDeepInspectionApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#popularity DataFortisaseSecurityApplications#popularity}
  */
  readonly popularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#primary_key DataFortisaseSecurityApplications#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#protocol DataFortisaseSecurityApplications#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#requires_ssl_deep_inspection DataFortisaseSecurityApplications#requires_ssl_deep_inspection}
  */
  readonly requiresSslDeepInspection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#risk DataFortisaseSecurityApplications#risk}
  */
  readonly risk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#technology DataFortisaseSecurityApplications#technology}
  */
  readonly technology?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#vendor DataFortisaseSecurityApplications#vendor}
  */
  readonly vendor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications fortisase_security_applications}
*/
export class DataFortisaseSecurityApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityApplications to import
  * @param importFromId The id of the existing DataFortisaseSecurityApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_applications fortisase_security_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_applications',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._behavior = config.behavior;
    this._category = config.category;
    this._ftntid = config.ftntid;
    this._iconClass = config.iconClass;
    this._isCloudApplication = config.isCloudApplication;
    this._isDeepInspectionApp = config.isDeepInspectionApp;
    this._popularity = config.popularity;
    this._primaryKey = config.primaryKey;
    this._protocol = config.protocol;
    this._requiresSslDeepInspection = config.requiresSslDeepInspection;
    this._risk = config.risk;
    this._technology = config.technology;
    this._vendor = config.vendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string[]; 
  public get behavior() {
    return cdktf.Fn.tolist(this.getListAttribute('behavior'));
  }
  public set behavior(value: string[]) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // category - computed: true, optional: true, required: false
  private _category?: number; 
  public get category() {
    return this.getNumberAttribute('category');
  }
  public set category(value: number) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // ftntid - computed: true, optional: true, required: false
  private _ftntid?: number; 
  public get ftntid() {
    return this.getNumberAttribute('ftntid');
  }
  public set ftntid(value: number) {
    this._ftntid = value;
  }
  public resetFtntid() {
    this._ftntid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftntidInput() {
    return this._ftntid;
  }

  // icon_class - computed: true, optional: true, required: false
  private _iconClass?: string; 
  public get iconClass() {
    return this.getStringAttribute('icon_class');
  }
  public set iconClass(value: string) {
    this._iconClass = value;
  }
  public resetIconClass() {
    this._iconClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconClassInput() {
    return this._iconClass;
  }

  // is_cloud_application - computed: true, optional: true, required: false
  private _isCloudApplication?: boolean | cdktf.IResolvable; 
  public get isCloudApplication() {
    return this.getBooleanAttribute('is_cloud_application');
  }
  public set isCloudApplication(value: boolean | cdktf.IResolvable) {
    this._isCloudApplication = value;
  }
  public resetIsCloudApplication() {
    this._isCloudApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCloudApplicationInput() {
    return this._isCloudApplication;
  }

  // is_deep_inspection_app - computed: true, optional: true, required: false
  private _isDeepInspectionApp?: boolean | cdktf.IResolvable; 
  public get isDeepInspectionApp() {
    return this.getBooleanAttribute('is_deep_inspection_app');
  }
  public set isDeepInspectionApp(value: boolean | cdktf.IResolvable) {
    this._isDeepInspectionApp = value;
  }
  public resetIsDeepInspectionApp() {
    this._isDeepInspectionApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeepInspectionAppInput() {
    return this._isDeepInspectionApp;
  }

  // popularity - computed: true, optional: true, required: false
  private _popularity?: number; 
  public get popularity() {
    return this.getNumberAttribute('popularity');
  }
  public set popularity(value: number) {
    this._popularity = value;
  }
  public resetPopularity() {
    this._popularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popularityInput() {
    return this._popularity;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // requires_ssl_deep_inspection - computed: true, optional: true, required: false
  private _requiresSslDeepInspection?: boolean | cdktf.IResolvable; 
  public get requiresSslDeepInspection() {
    return this.getBooleanAttribute('requires_ssl_deep_inspection');
  }
  public set requiresSslDeepInspection(value: boolean | cdktf.IResolvable) {
    this._requiresSslDeepInspection = value;
  }
  public resetRequiresSslDeepInspection() {
    this._requiresSslDeepInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresSslDeepInspectionInput() {
    return this._requiresSslDeepInspection;
  }

  // risk - computed: true, optional: true, required: false
  private _risk?: number; 
  public get risk() {
    return this.getNumberAttribute('risk');
  }
  public set risk(value: number) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // technology - computed: true, optional: true, required: false
  private _technology?: string; 
  public get technology() {
    return this.getStringAttribute('technology');
  }
  public set technology(value: string) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      behavior: cdktf.listMapper(cdktf.stringToTerraform, false)(this._behavior),
      category: cdktf.numberToTerraform(this._category),
      ftntid: cdktf.numberToTerraform(this._ftntid),
      icon_class: cdktf.stringToTerraform(this._iconClass),
      is_cloud_application: cdktf.booleanToTerraform(this._isCloudApplication),
      is_deep_inspection_app: cdktf.booleanToTerraform(this._isDeepInspectionApp),
      popularity: cdktf.numberToTerraform(this._popularity),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      protocol: cdktf.stringToTerraform(this._protocol),
      requires_ssl_deep_inspection: cdktf.booleanToTerraform(this._requiresSslDeepInspection),
      risk: cdktf.numberToTerraform(this._risk),
      technology: cdktf.stringToTerraform(this._technology),
      vendor: cdktf.stringToTerraform(this._vendor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      behavior: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._behavior),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      category: {
        value: cdktf.numberToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftntid: {
        value: cdktf.numberToHclTerraform(this._ftntid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icon_class: {
        value: cdktf.stringToHclTerraform(this._iconClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_cloud_application: {
        value: cdktf.booleanToHclTerraform(this._isCloudApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_deep_inspection_app: {
        value: cdktf.booleanToHclTerraform(this._isDeepInspectionApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      popularity: {
        value: cdktf.numberToHclTerraform(this._popularity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requires_ssl_deep_inspection: {
        value: cdktf.booleanToHclTerraform(this._requiresSslDeepInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      risk: {
        value: cdktf.numberToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      technology: {
        value: cdktf.stringToHclTerraform(this._technology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
