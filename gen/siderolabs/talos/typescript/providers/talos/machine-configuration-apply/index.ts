// https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineConfigurationApplyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The mode of the apply operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#apply_mode MachineConfigurationApply#apply_mode}
  */
  readonly applyMode?: string;
  /**
  * The client configuration data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#client_configuration MachineConfigurationApply#client_configuration}
  */
  readonly clientConfiguration: MachineConfigurationApplyClientConfiguration;
  /**
  * The list of config patches to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#config_patches MachineConfigurationApply#config_patches}
  */
  readonly configPatches?: string[];
  /**
  * The endpoint of the machine to bootstrap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#endpoint MachineConfigurationApply#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The machine configuration to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#machine_configuration_input MachineConfigurationApply#machine_configuration_input}
  */
  readonly machineConfigurationInput: string;
  /**
  * The name of the node to bootstrap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#node MachineConfigurationApply#node}
  */
  readonly nodeAttribute: string;
  /**
  * Actions to be taken on destroy, if *reset* is not set this is a no-op.
  * 
  * > Note: Any changes to *on_destroy* block has to be applied first by running *terraform apply* first,
  * then a subsequent *terraform destroy* for the changes to take effect due to limitations in Terraform provider framework.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#on_destroy MachineConfigurationApply#on_destroy}
  */
  readonly onDestroy?: MachineConfigurationApplyOnDestroy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#timeouts MachineConfigurationApply#timeouts}
  */
  readonly timeouts?: MachineConfigurationApplyTimeouts;
}
export interface MachineConfigurationApplyClientConfiguration {
  /**
  * The client CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#ca_certificate MachineConfigurationApply#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * The client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#client_certificate MachineConfigurationApply#client_certificate}
  */
  readonly clientCertificate: string;
  /**
  * The client key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#client_key MachineConfigurationApply#client_key}
  */
  readonly clientKey: string;
}

export function machineConfigurationApplyClientConfigurationToTerraform(struct?: MachineConfigurationApplyClientConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}


export function machineConfigurationApplyClientConfigurationToHclTerraform(struct?: MachineConfigurationApplyClientConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineConfigurationApplyClientConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineConfigurationApplyClientConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineConfigurationApplyClientConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: false, required: true
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: false, required: true
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }
}
export interface MachineConfigurationApplyOnDestroy {
  /**
  * Graceful indicates whether node should leave etcd before the upgrade, it also enforces etcd checks before leaving. Default true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#graceful MachineConfigurationApply#graceful}
  */
  readonly graceful?: boolean | cdktf.IResolvable;
  /**
  * Reboot indicates whether node should reboot or halt after resetting. Default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#reboot MachineConfigurationApply#reboot}
  */
  readonly reboot?: boolean | cdktf.IResolvable;
  /**
  * Reset the machine to the initial state (STATE and EPHEMERAL will be wiped). Default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#reset MachineConfigurationApply#reset}
  */
  readonly reset?: boolean | cdktf.IResolvable;
}

export function machineConfigurationApplyOnDestroyToTerraform(struct?: MachineConfigurationApplyOnDestroy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graceful: cdktf.booleanToTerraform(struct!.graceful),
    reboot: cdktf.booleanToTerraform(struct!.reboot),
    reset: cdktf.booleanToTerraform(struct!.reset),
  }
}


export function machineConfigurationApplyOnDestroyToHclTerraform(struct?: MachineConfigurationApplyOnDestroy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graceful: {
      value: cdktf.booleanToHclTerraform(struct!.graceful),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reboot: {
      value: cdktf.booleanToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset: {
      value: cdktf.booleanToHclTerraform(struct!.reset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineConfigurationApplyOnDestroyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineConfigurationApplyOnDestroy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceful = this._graceful;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineConfigurationApplyOnDestroy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graceful = undefined;
      this._reboot = undefined;
      this._reset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graceful = value.graceful;
      this._reboot = value.reboot;
      this._reset = value.reset;
    }
  }

  // graceful - computed: true, optional: true, required: false
  private _graceful?: boolean | cdktf.IResolvable; 
  public get graceful() {
    return this.getBooleanAttribute('graceful');
  }
  public set graceful(value: boolean | cdktf.IResolvable) {
    this._graceful = value;
  }
  public resetGraceful() {
    this._graceful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulInput() {
    return this._graceful;
  }

  // reboot - computed: true, optional: true, required: false
  private _reboot?: boolean | cdktf.IResolvable; 
  public get reboot() {
    return this.getBooleanAttribute('reboot');
  }
  public set reboot(value: boolean | cdktf.IResolvable) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // reset - computed: true, optional: true, required: false
  private _reset?: boolean | cdktf.IResolvable; 
  public get reset() {
    return this.getBooleanAttribute('reset');
  }
  public set reset(value: boolean | cdktf.IResolvable) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }
}
export interface MachineConfigurationApplyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#create MachineConfigurationApply#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#delete MachineConfigurationApply#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#update MachineConfigurationApply#update}
  */
  readonly update?: string;
}

export function machineConfigurationApplyTimeoutsToTerraform(struct?: MachineConfigurationApplyTimeouts | cdktf.IResolvable): any {
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


export function machineConfigurationApplyTimeoutsToHclTerraform(struct?: MachineConfigurationApplyTimeouts | cdktf.IResolvable): any {
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

export class MachineConfigurationApplyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineConfigurationApplyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MachineConfigurationApplyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply talos_machine_configuration_apply}
*/
export class MachineConfigurationApply extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_machine_configuration_apply";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineConfigurationApply resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineConfigurationApply to import
  * @param importFromId The id of the existing MachineConfigurationApply that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineConfigurationApply to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_machine_configuration_apply", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/resources/machine_configuration_apply talos_machine_configuration_apply} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineConfigurationApplyConfig
  */
  public constructor(scope: Construct, id: string, config: MachineConfigurationApplyConfig) {
    super(scope, id, {
      terraformResourceType: 'talos_machine_configuration_apply',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyMode = config.applyMode;
    this._clientConfiguration.internalValue = config.clientConfiguration;
    this._configPatches = config.configPatches;
    this._endpoint = config.endpoint;
    this._machineConfigurationInput = config.machineConfigurationInput;
    this._node = config.nodeAttribute;
    this._onDestroy.internalValue = config.onDestroy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_mode - computed: true, optional: true, required: false
  private _applyMode?: string; 
  public get applyMode() {
    return this.getStringAttribute('apply_mode');
  }
  public set applyMode(value: string) {
    this._applyMode = value;
  }
  public resetApplyMode() {
    this._applyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyModeInput() {
    return this._applyMode;
  }

  // client_configuration - computed: false, optional: false, required: true
  private _clientConfiguration = new MachineConfigurationApplyClientConfigurationOutputReference(this, "client_configuration");
  public get clientConfiguration() {
    return this._clientConfiguration;
  }
  public putClientConfiguration(value: MachineConfigurationApplyClientConfiguration) {
    this._clientConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigurationInput() {
    return this._clientConfiguration.internalValue;
  }

  // config_patches - computed: false, optional: true, required: false
  private _configPatches?: string[]; 
  public get configPatches() {
    return this.getListAttribute('config_patches');
  }
  public set configPatches(value: string[]) {
    this._configPatches = value;
  }
  public resetConfigPatches() {
    this._configPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPatchesInput() {
    return this._configPatches;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_configuration - computed: true, optional: false, required: false
  public get machineConfiguration() {
    return this.getStringAttribute('machine_configuration');
  }

  // machine_configuration_input - computed: false, optional: false, required: true
  private _machineConfigurationInput?: string; 
  public get machineConfigurationInput() {
    return this.getStringAttribute('machine_configuration_input');
  }
  public set machineConfigurationInput(value: string) {
    this._machineConfigurationInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineConfigurationInputInput() {
    return this._machineConfigurationInput;
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // on_destroy - computed: false, optional: true, required: false
  private _onDestroy = new MachineConfigurationApplyOnDestroyOutputReference(this, "on_destroy");
  public get onDestroy() {
    return this._onDestroy;
  }
  public putOnDestroy(value: MachineConfigurationApplyOnDestroy) {
    this._onDestroy.internalValue = value;
  }
  public resetOnDestroy() {
    this._onDestroy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDestroyInput() {
    return this._onDestroy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineConfigurationApplyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineConfigurationApplyTimeouts) {
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
      apply_mode: cdktf.stringToTerraform(this._applyMode),
      client_configuration: machineConfigurationApplyClientConfigurationToTerraform(this._clientConfiguration.internalValue),
      config_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configPatches),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      machine_configuration_input: cdktf.stringToTerraform(this._machineConfigurationInput),
      node: cdktf.stringToTerraform(this._node),
      on_destroy: machineConfigurationApplyOnDestroyToTerraform(this._onDestroy.internalValue),
      timeouts: machineConfigurationApplyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_mode: {
        value: cdktf.stringToHclTerraform(this._applyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_configuration: {
        value: machineConfigurationApplyClientConfigurationToHclTerraform(this._clientConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineConfigurationApplyClientConfiguration",
      },
      config_patches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configPatches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_configuration_input: {
        value: cdktf.stringToHclTerraform(this._machineConfigurationInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node: {
        value: cdktf.stringToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_destroy: {
        value: machineConfigurationApplyOnDestroyToHclTerraform(this._onDestroy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineConfigurationApplyOnDestroy",
      },
      timeouts: {
        value: machineConfigurationApplyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineConfigurationApplyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
