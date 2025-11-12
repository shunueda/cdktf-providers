// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HsmConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Description of the HSM connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#description HsmConnection#description}
  */
  readonly description?: string;
  /**
  * Hostname/IP of the Luna Network HSM Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#hostname HsmConnection#hostname}
  */
  readonly hostname: string;
  /**
  * This flag signifies if it is a HighAvailability(HA) Group or not. Requires at least two HSM partitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#is_ha_enabled HsmConnection#is_ha_enabled}
  */
  readonly isHaEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) A list of key:value pairs to store with the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#meta HsmConnection#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Unique connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#name HsmConnection#name}
  */
  readonly name: string;
  /**
  * Password associated with the Luna Network HSM partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#partition_password HsmConnection#partition_password}
  */
  readonly partitionPassword: string;
  /**
  * ID of the HSM network server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#server_id HsmConnection#server_id}
  */
  readonly serverId: string;
  /**
  * partitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#partitions HsmConnection#partitions}
  */
  readonly partitions: HsmConnectionPartitions[] | cdktf.IResolvable;
}
export interface HsmConnectionPartitions {
  /**
  * Label of a partition on the Luna Network HSM Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#partition_label HsmConnection#partition_label}
  */
  readonly partitionLabel: string;
  /**
  * Serial number of the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#serial_number HsmConnection#serial_number}
  */
  readonly serialNumber: string;
}

export function hsmConnectionPartitionsToTerraform(struct?: HsmConnectionPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_label: cdktf.stringToTerraform(struct!.partitionLabel),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
  }
}


export function hsmConnectionPartitionsToHclTerraform(struct?: HsmConnectionPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_label: {
      value: cdktf.stringToHclTerraform(struct!.partitionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HsmConnectionPartitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HsmConnectionPartitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionLabel = this._partitionLabel;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HsmConnectionPartitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionLabel = undefined;
      this._serialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionLabel = value.partitionLabel;
      this._serialNumber = value.serialNumber;
    }
  }

  // partition_label - computed: false, optional: false, required: true
  private _partitionLabel?: string; 
  public get partitionLabel() {
    return this.getStringAttribute('partition_label');
  }
  public set partitionLabel(value: string) {
    this._partitionLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionLabelInput() {
    return this._partitionLabel;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}

export class HsmConnectionPartitionsList extends cdktf.ComplexList {
  public internalValue? : HsmConnectionPartitions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HsmConnectionPartitionsOutputReference {
    return new HsmConnectionPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection ciphertrust_hsm_connection}
*/
export class HsmConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_hsm_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HsmConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HsmConnection to import
  * @param importFromId The id of the existing HsmConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HsmConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_hsm_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_connection ciphertrust_hsm_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HsmConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: HsmConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_hsm_connection',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
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
    this._hostname = config.hostname;
    this._isHaEnabled = config.isHaEnabled;
    this._meta = config.meta;
    this._name = config.name;
    this._partitionPassword = config.partitionPassword;
    this._serverId = config.serverId;
    this._partitions.internalValue = config.partitions;
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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_ha_enabled - computed: false, optional: true, required: false
  private _isHaEnabled?: boolean | cdktf.IResolvable; 
  public get isHaEnabled() {
    return this.getBooleanAttribute('is_ha_enabled');
  }
  public set isHaEnabled(value: boolean | cdktf.IResolvable) {
    this._isHaEnabled = value;
  }
  public resetIsHaEnabled() {
    this._isHaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaEnabledInput() {
    return this._isHaEnabled;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
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

  // partition_password - computed: false, optional: false, required: true
  private _partitionPassword?: string; 
  public get partitionPassword() {
    return this.getStringAttribute('partition_password');
  }
  public set partitionPassword(value: string) {
    this._partitionPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionPasswordInput() {
    return this._partitionPassword;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // partitions - computed: false, optional: false, required: true
  private _partitions = new HsmConnectionPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: HsmConnectionPartitions[] | cdktf.IResolvable) {
    this._partitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      hostname: cdktf.stringToTerraform(this._hostname),
      is_ha_enabled: cdktf.booleanToTerraform(this._isHaEnabled),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      partition_password: cdktf.stringToTerraform(this._partitionPassword),
      server_id: cdktf.stringToTerraform(this._serverId),
      partitions: cdktf.listMapper(hsmConnectionPartitionsToTerraform, true)(this._partitions.internalValue),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_ha_enabled: {
        value: cdktf.booleanToHclTerraform(this._isHaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_password: {
        value: cdktf.stringToHclTerraform(this._partitionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitions: {
        value: cdktf.listMapperHcl(hsmConnectionPartitionsToHclTerraform, true)(this._partitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HsmConnectionPartitionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
