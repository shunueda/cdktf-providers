// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackLindormInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#cpu_brand ApsarastackLindormInstance#cpu_brand}
  */
  readonly cpuBrand: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#deletion_protection ApsarastackLindormInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#disk_category ApsarastackLindormInstance#disk_category}
  */
  readonly diskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#engine_type ApsarastackLindormInstance#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#id ApsarastackLindormInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#instance_alias ApsarastackLindormInstance#instance_alias}
  */
  readonly instanceAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#instance_type ApsarastackLindormInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#lindorm_num ApsarastackLindormInstance#lindorm_num}
  */
  readonly lindormNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#local_disk_num ApsarastackLindormInstance#local_disk_num}
  */
  readonly localDiskNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#local_disk_size ApsarastackLindormInstance#local_disk_size}
  */
  readonly localDiskSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#vpc_id ApsarastackLindormInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#vswitch_id ApsarastackLindormInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#zone_id ApsarastackLindormInstance#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance apsarastack_lindorm_instance}
*/
export class ApsarastackLindormInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_lindorm_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackLindormInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackLindormInstance to import
  * @param importFromId The id of the existing ApsarastackLindormInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackLindormInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_lindorm_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_lindorm_instance apsarastack_lindorm_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackLindormInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackLindormInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_lindorm_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuBrand = config.cpuBrand;
    this._deletionProtection = config.deletionProtection;
    this._diskCategory = config.diskCategory;
    this._engineType = config.engineType;
    this._id = config.id;
    this._instanceAlias = config.instanceAlias;
    this._instanceType = config.instanceType;
    this._lindormNum = config.lindormNum;
    this._localDiskNum = config.localDiskNum;
    this._localDiskSize = config.localDiskSize;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ali_uid - computed: true, optional: false, required: false
  public get aliUid() {
    return this.getNumberAttribute('ali_uid');
  }

  // cpu_brand - computed: false, optional: false, required: true
  private _cpuBrand?: string; 
  public get cpuBrand() {
    return this.getStringAttribute('cpu_brand');
  }
  public set cpuBrand(value: string) {
    this._cpuBrand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBrandInput() {
    return this._cpuBrand;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // disk_category - computed: false, optional: true, required: false
  private _diskCategory?: string; 
  public get diskCategory() {
    return this.getStringAttribute('disk_category');
  }
  public set diskCategory(value: string) {
    this._diskCategory = value;
  }
  public resetDiskCategory() {
    this._diskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCategoryInput() {
    return this._diskCategory;
  }

  // disk_usage - computed: true, optional: false, required: false
  public get diskUsage() {
    return this.getStringAttribute('disk_usage');
  }

  // enable_fs - computed: true, optional: false, required: false
  public get enableFs() {
    return this.getBooleanAttribute('enable_fs');
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
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

  // instance_alias - computed: false, optional: false, required: true
  private _instanceAlias?: string; 
  public get instanceAlias() {
    return this.getStringAttribute('instance_alias');
  }
  public set instanceAlias(value: string) {
    this._instanceAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAliasInput() {
    return this._instanceAlias;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_storage - computed: true, optional: false, required: false
  public get instanceStorage() {
    return this.getNumberAttribute('instance_storage');
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

  // lindorm_num - computed: false, optional: false, required: true
  private _lindormNum?: number; 
  public get lindormNum() {
    return this.getNumberAttribute('lindorm_num');
  }
  public set lindormNum(value: number) {
    this._lindormNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lindormNumInput() {
    return this._lindormNum;
  }

  // local_disk_num - computed: false, optional: true, required: false
  private _localDiskNum?: number; 
  public get localDiskNum() {
    return this.getNumberAttribute('local_disk_num');
  }
  public set localDiskNum(value: number) {
    this._localDiskNum = value;
  }
  public resetLocalDiskNum() {
    this._localDiskNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskNumInput() {
    return this._localDiskNum;
  }

  // local_disk_size - computed: false, optional: false, required: true
  private _localDiskSize?: string; 
  public get localDiskSize() {
    return this.getStringAttribute('local_disk_size');
  }
  public set localDiskSize(value: string) {
    this._localDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskSizeInput() {
    return this._localDiskSize;
  }

  // switch_l_proxy_flag - computed: true, optional: false, required: false
  public get switchLProxyFlag() {
    return this.getBooleanAttribute('switch_l_proxy_flag');
  }

  // switch_ssl_encryption_flag - computed: true, optional: false, required: false
  public get switchSslEncryptionFlag() {
    return this.getBooleanAttribute('switch_ssl_encryption_flag');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_brand: cdktf.stringToTerraform(this._cpuBrand),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      disk_category: cdktf.stringToTerraform(this._diskCategory),
      engine_type: cdktf.stringToTerraform(this._engineType),
      id: cdktf.stringToTerraform(this._id),
      instance_alias: cdktf.stringToTerraform(this._instanceAlias),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      lindorm_num: cdktf.numberToTerraform(this._lindormNum),
      local_disk_num: cdktf.numberToTerraform(this._localDiskNum),
      local_disk_size: cdktf.stringToTerraform(this._localDiskSize),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_brand: {
        value: cdktf.stringToHclTerraform(this._cpuBrand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_category: {
        value: cdktf.stringToHclTerraform(this._diskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
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
      instance_alias: {
        value: cdktf.stringToHclTerraform(this._instanceAlias),
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
      lindorm_num: {
        value: cdktf.numberToHclTerraform(this._lindormNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_disk_num: {
        value: cdktf.numberToHclTerraform(this._localDiskNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_disk_size: {
        value: cdktf.stringToHclTerraform(this._localDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
