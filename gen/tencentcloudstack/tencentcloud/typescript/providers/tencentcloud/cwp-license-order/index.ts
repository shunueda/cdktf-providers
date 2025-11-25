// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CwpLicenseOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order#alias CwpLicenseOrder#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order#id CwpLicenseOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * License quantity, Quantity to be purchased.Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order#license_num CwpLicenseOrder#license_num}
  */
  readonly licenseNum?: number;
  /**
  * LicenseType, 0 CWP Pro - Pay as you go, 1 CWP Pro - Monthly subscription, 2 CWP Ultimate - Monthly subscription. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order#license_type CwpLicenseOrder#license_type}
  */
  readonly licenseType?: number;
  /**
  * Project ID. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order#project_id CwpLicenseOrder#project_id}
  */
  readonly projectId?: number;
  /**
  * Purchase order region, only 1 Guangzhou, 9 Singapore is supported here. Guangzhou is recommended. Singapore is whitelisted. Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order#region_id CwpLicenseOrder#region_id}
  */
  readonly regionId?: number;
  /**
  * Tags of the license order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order#tags CwpLicenseOrder#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order tencentcloud_cwp_license_order}
*/
export class CwpLicenseOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cwp_license_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CwpLicenseOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CwpLicenseOrder to import
  * @param importFromId The id of the existing CwpLicenseOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CwpLicenseOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cwp_license_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cwp_license_order tencentcloud_cwp_license_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CwpLicenseOrderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CwpLicenseOrderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cwp_license_order',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._id = config.id;
    this._licenseNum = config.licenseNum;
    this._licenseType = config.licenseType;
    this._projectId = config.projectId;
    this._regionId = config.regionId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // license_id - computed: true, optional: false, required: false
  public get licenseId() {
    return this.getNumberAttribute('license_id');
  }

  // license_num - computed: false, optional: true, required: false
  private _licenseNum?: number; 
  public get licenseNum() {
    return this.getNumberAttribute('license_num');
  }
  public set licenseNum(value: number) {
    this._licenseNum = value;
  }
  public resetLicenseNum() {
    this._licenseNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseNumInput() {
    return this._licenseNum;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: number; 
  public get licenseType() {
    return this.getNumberAttribute('license_type');
  }
  public set licenseType(value: number) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      id: cdktf.stringToTerraform(this._id),
      license_num: cdktf.numberToTerraform(this._licenseNum),
      license_type: cdktf.numberToTerraform(this._licenseType),
      project_id: cdktf.numberToTerraform(this._projectId),
      region_id: cdktf.numberToTerraform(this._regionId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
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
      license_num: {
        value: cdktf.numberToHclTerraform(this._licenseNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      license_type: {
        value: cdktf.numberToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
