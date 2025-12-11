// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsVaultReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#id KmsVaultReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#replica_region KmsVaultReplication#replica_region}
  */
  readonly replicaRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#vault_id KmsVaultReplication#vault_id}
  */
  readonly vaultId: string;
  /**
  * replica_vault_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#replica_vault_metadata KmsVaultReplication#replica_vault_metadata}
  */
  readonly replicaVaultMetadata?: KmsVaultReplicationReplicaVaultMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#timeouts KmsVaultReplication#timeouts}
  */
  readonly timeouts?: KmsVaultReplicationTimeouts;
}
export interface KmsVaultReplicationReplicaVaultMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#idcs_account_name_url KmsVaultReplication#idcs_account_name_url}
  */
  readonly idcsAccountNameUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#private_endpoint_id KmsVaultReplication#private_endpoint_id}
  */
  readonly privateEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#vault_type KmsVaultReplication#vault_type}
  */
  readonly vaultType: string;
}

export function kmsVaultReplicationReplicaVaultMetadataToTerraform(struct?: KmsVaultReplicationReplicaVaultMetadataOutputReference | KmsVaultReplicationReplicaVaultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idcs_account_name_url: cdktf.stringToTerraform(struct!.idcsAccountNameUrl),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    vault_type: cdktf.stringToTerraform(struct!.vaultType),
  }
}


export function kmsVaultReplicationReplicaVaultMetadataToHclTerraform(struct?: KmsVaultReplicationReplicaVaultMetadataOutputReference | KmsVaultReplicationReplicaVaultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idcs_account_name_url: {
      value: cdktf.stringToHclTerraform(struct!.idcsAccountNameUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_type: {
      value: cdktf.stringToHclTerraform(struct!.vaultType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsVaultReplicationReplicaVaultMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsVaultReplicationReplicaVaultMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idcsAccountNameUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcsAccountNameUrl = this._idcsAccountNameUrl;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._vaultType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultType = this._vaultType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultReplicationReplicaVaultMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idcsAccountNameUrl = undefined;
      this._privateEndpointId = undefined;
      this._vaultType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idcsAccountNameUrl = value.idcsAccountNameUrl;
      this._privateEndpointId = value.privateEndpointId;
      this._vaultType = value.vaultType;
    }
  }

  // idcs_account_name_url - computed: false, optional: false, required: true
  private _idcsAccountNameUrl?: string; 
  public get idcsAccountNameUrl() {
    return this.getStringAttribute('idcs_account_name_url');
  }
  public set idcsAccountNameUrl(value: string) {
    this._idcsAccountNameUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsAccountNameUrlInput() {
    return this._idcsAccountNameUrl;
  }

  // private_endpoint_id - computed: false, optional: false, required: true
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // vault_type - computed: false, optional: false, required: true
  private _vaultType?: string; 
  public get vaultType() {
    return this.getStringAttribute('vault_type');
  }
  public set vaultType(value: string) {
    this._vaultType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTypeInput() {
    return this._vaultType;
  }
}
export interface KmsVaultReplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#create KmsVaultReplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#delete KmsVaultReplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#update KmsVaultReplication#update}
  */
  readonly update?: string;
}

export function kmsVaultReplicationTimeoutsToTerraform(struct?: KmsVaultReplicationTimeouts | cdktf.IResolvable): any {
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


export function kmsVaultReplicationTimeoutsToHclTerraform(struct?: KmsVaultReplicationTimeouts | cdktf.IResolvable): any {
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

export class KmsVaultReplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsVaultReplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KmsVaultReplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication oci_kms_vault_replication}
*/
export class KmsVaultReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_vault_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsVaultReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsVaultReplication to import
  * @param importFromId The id of the existing KmsVaultReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsVaultReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_vault_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/kms_vault_replication oci_kms_vault_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsVaultReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: KmsVaultReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_vault_replication',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._replicaRegion = config.replicaRegion;
    this._vaultId = config.vaultId;
    this._replicaVaultMetadata.internalValue = config.replicaVaultMetadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crypto_endpoint - computed: true, optional: false, required: false
  public get cryptoEndpoint() {
    return this.getStringAttribute('crypto_endpoint');
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

  // management_endpoint - computed: true, optional: false, required: false
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }

  // replica_region - computed: false, optional: false, required: true
  private _replicaRegion?: string; 
  public get replicaRegion() {
    return this.getStringAttribute('replica_region');
  }
  public set replicaRegion(value: string) {
    this._replicaRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRegionInput() {
    return this._replicaRegion;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // vault_replica_status - computed: true, optional: false, required: false
  public get vaultReplicaStatus() {
    return this.getStringAttribute('vault_replica_status');
  }

  // replica_vault_metadata - computed: false, optional: true, required: false
  private _replicaVaultMetadata = new KmsVaultReplicationReplicaVaultMetadataOutputReference(this, "replica_vault_metadata");
  public get replicaVaultMetadata() {
    return this._replicaVaultMetadata;
  }
  public putReplicaVaultMetadata(value: KmsVaultReplicationReplicaVaultMetadata) {
    this._replicaVaultMetadata.internalValue = value;
  }
  public resetReplicaVaultMetadata() {
    this._replicaVaultMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaVaultMetadataInput() {
    return this._replicaVaultMetadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsVaultReplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsVaultReplicationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      replica_region: cdktf.stringToTerraform(this._replicaRegion),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      replica_vault_metadata: kmsVaultReplicationReplicaVaultMetadataToTerraform(this._replicaVaultMetadata.internalValue),
      timeouts: kmsVaultReplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_region: {
        value: cdktf.stringToHclTerraform(this._replicaRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_vault_metadata: {
        value: kmsVaultReplicationReplicaVaultMetadataToHclTerraform(this._replicaVaultMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsVaultReplicationReplicaVaultMetadataList",
      },
      timeouts: {
        value: kmsVaultReplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsVaultReplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
