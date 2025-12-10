// https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations are key/value pairs that can be used to store additional information about the machine. May not contain dots (.) in keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#annotations Machine#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The operating system to install on the new machine(s). E.g. ubuntu@22.04. Changing this value will cause the machine to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#base Machine#base}
  */
  readonly base?: string;
  /**
  * Machine constraints that overwrite those available from 'juju get-model-constraints' and provider's defaults. Changing this value will cause the application to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#constraints Machine#constraints}
  */
  readonly constraints?: string;
  /**
  * Storage constraints for disks to attach to the machine(s). Changing this value will cause the machine to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#disks Machine#disks}
  */
  readonly disks?: string;
  /**
  * The Juju model's UUID to specify the model in which to add a new machine. Changing this value will cause the machine to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#model_uuid Machine#model_uuid}
  */
  readonly modelUuid: string;
  /**
  * A name for the machine resource in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#name Machine#name}
  */
  readonly name?: string;
  /**
  * Additional information about how to allocate the machine in the cloud. Changing this value will cause the application to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#placement Machine#placement}
  */
  readonly placement?: string;
  /**
  * The file path to read the private key from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#private_key_file Machine#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * The file path to read the public key from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#public_key_file Machine#public_key_file}
  */
  readonly publicKeyFile?: string;
  /**
  * The user@host directive for manual provisioning an existing machine via ssh. Requires public_key_file & private_key_file arguments. Changing this value will cause the machine to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#ssh_address Machine#ssh_address}
  */
  readonly sshAddress?: string;
  /**
  * If true, waits for the machine's hostname to be set during creation. A side effect is that this also waits for the machine to reach 'active' state in Juju.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#wait_for_hostname Machine#wait_for_hostname}
  */
  readonly waitForHostname?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#timeouts Machine#timeouts}
  */
  readonly timeouts?: MachineTimeouts;
}
export interface MachineTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#create Machine#create}
  */
  readonly create?: string;
}

export function machineTimeoutsToTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function machineTimeoutsToHclTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine juju_machine}
*/
export class Machine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Machine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Machine to import
  * @param importFromId The id of the existing Machine that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Machine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/machine juju_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineConfig
  */
  public constructor(scope: Construct, id: string, config: MachineConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_machine',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.1.1',
        providerVersionConstraint: '1.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._base = config.base;
    this._constraints = config.constraints;
    this._disks = config.disks;
    this._modelUuid = config.modelUuid;
    this._name = config.name;
    this._placement = config.placement;
    this._privateKeyFile = config.privateKeyFile;
    this._publicKeyFile = config.publicKeyFile;
    this._sshAddress = config.sshAddress;
    this._waitForHostname = config.waitForHostname;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // base - computed: true, optional: true, required: false
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints?: string; 
  public get constraints() {
    return this.getStringAttribute('constraints');
  }
  public set constraints(value: string) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
  }

  // disks - computed: false, optional: true, required: false
  private _disks?: string; 
  public get disks() {
    return this.getStringAttribute('disks');
  }
  public set disks(value: string) {
    this._disks = value;
  }
  public resetDisks() {
    this._disks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_id - computed: true, optional: false, required: false
  public get machineId() {
    return this.getStringAttribute('machine_id');
  }

  // model_uuid - computed: false, optional: false, required: true
  private _modelUuid?: string; 
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }
  public set modelUuid(value: string) {
    this._modelUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelUuidInput() {
    return this._modelUuid;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // placement - computed: false, optional: true, required: false
  private _placement?: string; 
  public get placement() {
    return this.getStringAttribute('placement');
  }
  public set placement(value: string) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // public_key_file - computed: false, optional: true, required: false
  private _publicKeyFile?: string; 
  public get publicKeyFile() {
    return this.getStringAttribute('public_key_file');
  }
  public set publicKeyFile(value: string) {
    this._publicKeyFile = value;
  }
  public resetPublicKeyFile() {
    this._publicKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyFileInput() {
    return this._publicKeyFile;
  }

  // ssh_address - computed: false, optional: true, required: false
  private _sshAddress?: string; 
  public get sshAddress() {
    return this.getStringAttribute('ssh_address');
  }
  public set sshAddress(value: string) {
    this._sshAddress = value;
  }
  public resetSshAddress() {
    this._sshAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAddressInput() {
    return this._sshAddress;
  }

  // wait_for_hostname - computed: false, optional: true, required: false
  private _waitForHostname?: boolean | cdktf.IResolvable; 
  public get waitForHostname() {
    return this.getBooleanAttribute('wait_for_hostname');
  }
  public set waitForHostname(value: boolean | cdktf.IResolvable) {
    this._waitForHostname = value;
  }
  public resetWaitForHostname() {
    this._waitForHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForHostnameInput() {
    return this._waitForHostname;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      base: cdktf.stringToTerraform(this._base),
      constraints: cdktf.stringToTerraform(this._constraints),
      disks: cdktf.stringToTerraform(this._disks),
      model_uuid: cdktf.stringToTerraform(this._modelUuid),
      name: cdktf.stringToTerraform(this._name),
      placement: cdktf.stringToTerraform(this._placement),
      private_key_file: cdktf.stringToTerraform(this._privateKeyFile),
      public_key_file: cdktf.stringToTerraform(this._publicKeyFile),
      ssh_address: cdktf.stringToTerraform(this._sshAddress),
      wait_for_hostname: cdktf.booleanToTerraform(this._waitForHostname),
      timeouts: machineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      base: {
        value: cdktf.stringToHclTerraform(this._base),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constraints: {
        value: cdktf.stringToHclTerraform(this._constraints),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disks: {
        value: cdktf.stringToHclTerraform(this._disks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_uuid: {
        value: cdktf.stringToHclTerraform(this._modelUuid),
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
      placement: {
        value: cdktf.stringToHclTerraform(this._placement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_file: {
        value: cdktf.stringToHclTerraform(this._privateKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_file: {
        value: cdktf.stringToHclTerraform(this._publicKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_address: {
        value: cdktf.stringToHclTerraform(this._sshAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_hostname: {
        value: cdktf.booleanToHclTerraform(this._waitForHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: machineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
