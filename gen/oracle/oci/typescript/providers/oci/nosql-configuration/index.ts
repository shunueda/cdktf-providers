// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NosqlConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#compartment_id NosqlConfiguration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#environment NosqlConfiguration#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#id NosqlConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#is_opc_dry_run NosqlConfiguration#is_opc_dry_run}
  */
  readonly isOpcDryRun?: boolean | cdktf.IResolvable;
  /**
  * kms_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#kms_key NosqlConfiguration#kms_key}
  */
  readonly kmsKey?: NosqlConfigurationKmsKey;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#timeouts NosqlConfiguration#timeouts}
  */
  readonly timeouts?: NosqlConfigurationTimeouts;
}
export interface NosqlConfigurationKmsKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#id NosqlConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#kms_key_state NosqlConfiguration#kms_key_state}
  */
  readonly kmsKeyState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#kms_vault_id NosqlConfiguration#kms_vault_id}
  */
  readonly kmsVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#time_created NosqlConfiguration#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#time_updated NosqlConfiguration#time_updated}
  */
  readonly timeUpdated?: string;
}

export function nosqlConfigurationKmsKeyToTerraform(struct?: NosqlConfigurationKmsKeyOutputReference | NosqlConfigurationKmsKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    kms_key_state: cdktf.stringToTerraform(struct!.kmsKeyState),
    kms_vault_id: cdktf.stringToTerraform(struct!.kmsVaultId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    time_updated: cdktf.stringToTerraform(struct!.timeUpdated),
  }
}


export function nosqlConfigurationKmsKeyToHclTerraform(struct?: NosqlConfigurationKmsKeyOutputReference | NosqlConfigurationKmsKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_state: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_updated: {
      value: cdktf.stringToHclTerraform(struct!.timeUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NosqlConfigurationKmsKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NosqlConfigurationKmsKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._kmsKeyState !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyState = this._kmsKeyState;
    }
    if (this._kmsVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsVaultId = this._kmsVaultId;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._timeUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUpdated = this._timeUpdated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NosqlConfigurationKmsKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._kmsKeyState = undefined;
      this._kmsVaultId = undefined;
      this._timeCreated = undefined;
      this._timeUpdated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._kmsKeyState = value.kmsKeyState;
      this._kmsVaultId = value.kmsVaultId;
      this._timeCreated = value.timeCreated;
      this._timeUpdated = value.timeUpdated;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // kms_key_state - computed: true, optional: true, required: false
  private _kmsKeyState?: string; 
  public get kmsKeyState() {
    return this.getStringAttribute('kms_key_state');
  }
  public set kmsKeyState(value: string) {
    this._kmsKeyState = value;
  }
  public resetKmsKeyState() {
    this._kmsKeyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyStateInput() {
    return this._kmsKeyState;
  }

  // kms_vault_id - computed: true, optional: true, required: false
  private _kmsVaultId?: string; 
  public get kmsVaultId() {
    return this.getStringAttribute('kms_vault_id');
  }
  public set kmsVaultId(value: string) {
    this._kmsVaultId = value;
  }
  public resetKmsVaultId() {
    this._kmsVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsVaultIdInput() {
    return this._kmsVaultId;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // time_updated - computed: true, optional: true, required: false
  private _timeUpdated?: string; 
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
  public set timeUpdated(value: string) {
    this._timeUpdated = value;
  }
  public resetTimeUpdated() {
    this._timeUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUpdatedInput() {
    return this._timeUpdated;
  }
}
export interface NosqlConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#create NosqlConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#delete NosqlConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#update NosqlConfiguration#update}
  */
  readonly update?: string;
}

export function nosqlConfigurationTimeoutsToTerraform(struct?: NosqlConfigurationTimeouts | cdktf.IResolvable): any {
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


export function nosqlConfigurationTimeoutsToHclTerraform(struct?: NosqlConfigurationTimeouts | cdktf.IResolvable): any {
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

export class NosqlConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NosqlConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NosqlConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration oci_nosql_configuration}
*/
export class NosqlConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_nosql_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NosqlConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NosqlConfiguration to import
  * @param importFromId The id of the existing NosqlConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NosqlConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_nosql_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/nosql_configuration oci_nosql_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NosqlConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NosqlConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_nosql_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._environment = config.environment;
    this._id = config.id;
    this._isOpcDryRun = config.isOpcDryRun;
    this._kmsKey.internalValue = config.kmsKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // is_opc_dry_run - computed: true, optional: true, required: false
  private _isOpcDryRun?: boolean | cdktf.IResolvable; 
  public get isOpcDryRun() {
    return this.getBooleanAttribute('is_opc_dry_run');
  }
  public set isOpcDryRun(value: boolean | cdktf.IResolvable) {
    this._isOpcDryRun = value;
  }
  public resetIsOpcDryRun() {
    this._isOpcDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOpcDryRunInput() {
    return this._isOpcDryRun;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey = new NosqlConfigurationKmsKeyOutputReference(this, "kms_key");
  public get kmsKey() {
    return this._kmsKey;
  }
  public putKmsKey(value: NosqlConfigurationKmsKey) {
    this._kmsKey.internalValue = value;
  }
  public resetKmsKey() {
    this._kmsKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NosqlConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NosqlConfigurationTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      is_opc_dry_run: cdktf.booleanToTerraform(this._isOpcDryRun),
      kms_key: nosqlConfigurationKmsKeyToTerraform(this._kmsKey.internalValue),
      timeouts: nosqlConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      is_opc_dry_run: {
        value: cdktf.booleanToHclTerraform(this._isOpcDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key: {
        value: nosqlConfigurationKmsKeyToHclTerraform(this._kmsKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NosqlConfigurationKmsKeyList",
      },
      timeouts: {
        value: nosqlConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NosqlConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
