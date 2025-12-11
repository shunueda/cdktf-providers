// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbResourcePackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Validity period of resource package, in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#expire_day CynosdbResourcePackage#expire_day}
  */
  readonly expireDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#id CynosdbResourcePackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#instance_type CynosdbResourcePackage#instance_type}
  */
  readonly instanceType: string;
  /**
  * Number of purchased resource packs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#package_count CynosdbResourcePackage#package_count}
  */
  readonly packageCount: number;
  /**
  * Resource Package Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#package_name CynosdbResourcePackage#package_name}
  */
  readonly packageName?: string;
  /**
  * Resource package usage region China - common in mainland China, overseas - common in Hong Kong, Macao, Taiwan, and overseas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#package_region CynosdbResourcePackage#package_region}
  */
  readonly packageRegion: string;
  /**
  * Resource package size, calculated in 10000 units; Storage resources: GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#package_spec CynosdbResourcePackage#package_spec}
  */
  readonly packageSpec: number;
  /**
  * Resource package type: CCU computing resource package, DISK storage resource package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#package_type CynosdbResourcePackage#package_type}
  */
  readonly packageType: string;
  /**
  * Resource package version base basic version, common general version, enterprise enterprise version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#package_version CynosdbResourcePackage#package_version}
  */
  readonly packageVersion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package tencentcloud_cynosdb_resource_package}
*/
export class CynosdbResourcePackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_resource_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbResourcePackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbResourcePackage to import
  * @param importFromId The id of the existing CynosdbResourcePackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbResourcePackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_resource_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_resource_package tencentcloud_cynosdb_resource_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbResourcePackageConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbResourcePackageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_resource_package',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expireDay = config.expireDay;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._packageCount = config.packageCount;
    this._packageName = config.packageName;
    this._packageRegion = config.packageRegion;
    this._packageSpec = config.packageSpec;
    this._packageType = config.packageType;
    this._packageVersion = config.packageVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expire_day - computed: false, optional: false, required: true
  private _expireDay?: number; 
  public get expireDay() {
    return this.getNumberAttribute('expire_day');
  }
  public set expireDay(value: number) {
    this._expireDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDayInput() {
    return this._expireDay;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // package_count - computed: false, optional: false, required: true
  private _packageCount?: number; 
  public get packageCount() {
    return this.getNumberAttribute('package_count');
  }
  public set packageCount(value: number) {
    this._packageCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageCountInput() {
    return this._packageCount;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_region - computed: false, optional: false, required: true
  private _packageRegion?: string; 
  public get packageRegion() {
    return this.getStringAttribute('package_region');
  }
  public set packageRegion(value: string) {
    this._packageRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRegionInput() {
    return this._packageRegion;
  }

  // package_spec - computed: false, optional: false, required: true
  private _packageSpec?: number; 
  public get packageSpec() {
    return this.getNumberAttribute('package_spec');
  }
  public set packageSpec(value: number) {
    this._packageSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageSpecInput() {
    return this._packageSpec;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_version - computed: false, optional: false, required: true
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expire_day: cdktf.numberToTerraform(this._expireDay),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      package_count: cdktf.numberToTerraform(this._packageCount),
      package_name: cdktf.stringToTerraform(this._packageName),
      package_region: cdktf.stringToTerraform(this._packageRegion),
      package_spec: cdktf.numberToTerraform(this._packageSpec),
      package_type: cdktf.stringToTerraform(this._packageType),
      package_version: cdktf.stringToTerraform(this._packageVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expire_day: {
        value: cdktf.numberToHclTerraform(this._expireDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_count: {
        value: cdktf.numberToHclTerraform(this._packageCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      package_name: {
        value: cdktf.stringToHclTerraform(this._packageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_region: {
        value: cdktf.stringToHclTerraform(this._packageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_spec: {
        value: cdktf.numberToHclTerraform(this._packageSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_version: {
        value: cdktf.stringToHclTerraform(this._packageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
