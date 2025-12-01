// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbrReplicationVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#description HbrReplicationVault#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#encrypt_type HbrReplicationVault#encrypt_type}
  */
  readonly encryptType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#id HbrReplicationVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#kms_key_id HbrReplicationVault#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#replication_source_region_id HbrReplicationVault#replication_source_region_id}
  */
  readonly replicationSourceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#replication_source_vault_id HbrReplicationVault#replication_source_vault_id}
  */
  readonly replicationSourceVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#vault_name HbrReplicationVault#vault_name}
  */
  readonly vaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#vault_storage_class HbrReplicationVault#vault_storage_class}
  */
  readonly vaultStorageClass?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#timeouts HbrReplicationVault#timeouts}
  */
  readonly timeouts?: HbrReplicationVaultTimeouts;
}
export interface HbrReplicationVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#create HbrReplicationVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#delete HbrReplicationVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#update HbrReplicationVault#update}
  */
  readonly update?: string;
}

export function hbrReplicationVaultTimeoutsToTerraform(struct?: HbrReplicationVaultTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function hbrReplicationVaultTimeoutsToHclTerraform(struct?: HbrReplicationVaultTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrReplicationVaultTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HbrReplicationVaultTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrReplicationVaultTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault alicloud_hbr_replication_vault}
*/
export class HbrReplicationVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_replication_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbrReplicationVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbrReplicationVault to import
  * @param importFromId The id of the existing HbrReplicationVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbrReplicationVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_replication_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_replication_vault alicloud_hbr_replication_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbrReplicationVaultConfig
  */
  public constructor(scope: Construct, id: string, config: HbrReplicationVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_replication_vault',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._encryptType = config.encryptType;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._replicationSourceRegionId = config.replicationSourceRegionId;
    this._replicationSourceVaultId = config.replicationSourceVaultId;
    this._vaultName = config.vaultName;
    this._vaultStorageClass = config.vaultStorageClass;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encrypt_type - computed: true, optional: true, required: false
  private _encryptType?: string; 
  public get encryptType() {
    return this.getStringAttribute('encrypt_type');
  }
  public set encryptType(value: string) {
    this._encryptType = value;
  }
  public resetEncryptType() {
    this._encryptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptTypeInput() {
    return this._encryptType;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // replication_source_region_id - computed: false, optional: false, required: true
  private _replicationSourceRegionId?: string; 
  public get replicationSourceRegionId() {
    return this.getStringAttribute('replication_source_region_id');
  }
  public set replicationSourceRegionId(value: string) {
    this._replicationSourceRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceRegionIdInput() {
    return this._replicationSourceRegionId;
  }

  // replication_source_vault_id - computed: false, optional: false, required: true
  private _replicationSourceVaultId?: string; 
  public get replicationSourceVaultId() {
    return this.getStringAttribute('replication_source_vault_id');
  }
  public set replicationSourceVaultId(value: string) {
    this._replicationSourceVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceVaultIdInput() {
    return this._replicationSourceVaultId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }

  // vault_storage_class - computed: true, optional: true, required: false
  private _vaultStorageClass?: string; 
  public get vaultStorageClass() {
    return this.getStringAttribute('vault_storage_class');
  }
  public set vaultStorageClass(value: string) {
    this._vaultStorageClass = value;
  }
  public resetVaultStorageClass() {
    this._vaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultStorageClassInput() {
    return this._vaultStorageClass;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HbrReplicationVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HbrReplicationVaultTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      encrypt_type: cdktf.stringToTerraform(this._encryptType),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      replication_source_region_id: cdktf.stringToTerraform(this._replicationSourceRegionId),
      replication_source_vault_id: cdktf.stringToTerraform(this._replicationSourceVaultId),
      vault_name: cdktf.stringToTerraform(this._vaultName),
      vault_storage_class: cdktf.stringToTerraform(this._vaultStorageClass),
      timeouts: hbrReplicationVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_type: {
        value: cdktf.stringToHclTerraform(this._encryptType),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_source_region_id: {
        value: cdktf.stringToHclTerraform(this._replicationSourceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_source_vault_id: {
        value: cdktf.stringToHclTerraform(this._replicationSourceVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_name: {
        value: cdktf.stringToHclTerraform(this._vaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_storage_class: {
        value: cdktf.stringToHclTerraform(this._vaultStorageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: hbrReplicationVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HbrReplicationVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
