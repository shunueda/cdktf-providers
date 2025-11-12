// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NslicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#id Nslicense#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#license_file Nslicense#license_file}
  */
  readonly licenseFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#poll_delay Nslicense#poll_delay}
  */
  readonly pollDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#poll_interval Nslicense#poll_interval}
  */
  readonly pollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#poll_timeout Nslicense#poll_timeout}
  */
  readonly pollTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#reboot Nslicense#reboot}
  */
  readonly reboot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#ssh_host Nslicense#ssh_host}
  */
  readonly sshHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#ssh_host_pubkey Nslicense#ssh_host_pubkey}
  */
  readonly sshHostPubkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#ssh_password Nslicense#ssh_password}
  */
  readonly sshPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#ssh_port Nslicense#ssh_port}
  */
  readonly sshPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#ssh_username Nslicense#ssh_username}
  */
  readonly sshUsername?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#timeouts Nslicense#timeouts}
  */
  readonly timeouts?: NslicenseTimeouts;
}
export interface NslicenseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#create Nslicense#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#delete Nslicense#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#update Nslicense#update}
  */
  readonly update?: string;
}

export function nslicenseTimeoutsToTerraform(struct?: NslicenseTimeouts | cdktf.IResolvable): any {
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


export function nslicenseTimeoutsToHclTerraform(struct?: NslicenseTimeouts | cdktf.IResolvable): any {
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

export class NslicenseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NslicenseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NslicenseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense citrixadc_nslicense}
*/
export class Nslicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nslicense";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nslicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nslicense to import
  * @param importFromId The id of the existing Nslicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nslicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nslicense", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicense citrixadc_nslicense} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NslicenseConfig
  */
  public constructor(scope: Construct, id: string, config: NslicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nslicense',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._licenseFile = config.licenseFile;
    this._pollDelay = config.pollDelay;
    this._pollInterval = config.pollInterval;
    this._pollTimeout = config.pollTimeout;
    this._reboot = config.reboot;
    this._sshHost = config.sshHost;
    this._sshHostPubkey = config.sshHostPubkey;
    this._sshPassword = config.sshPassword;
    this._sshPort = config.sshPort;
    this._sshUsername = config.sshUsername;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // license_file - computed: false, optional: false, required: true
  private _licenseFile?: string; 
  public get licenseFile() {
    return this.getStringAttribute('license_file');
  }
  public set licenseFile(value: string) {
    this._licenseFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFileInput() {
    return this._licenseFile;
  }

  // poll_delay - computed: false, optional: true, required: false
  private _pollDelay?: string; 
  public get pollDelay() {
    return this.getStringAttribute('poll_delay');
  }
  public set pollDelay(value: string) {
    this._pollDelay = value;
  }
  public resetPollDelay() {
    this._pollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollDelayInput() {
    return this._pollDelay;
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: string; 
  public get pollInterval() {
    return this.getStringAttribute('poll_interval');
  }
  public set pollInterval(value: string) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // poll_timeout - computed: false, optional: true, required: false
  private _pollTimeout?: string; 
  public get pollTimeout() {
    return this.getStringAttribute('poll_timeout');
  }
  public set pollTimeout(value: string) {
    this._pollTimeout = value;
  }
  public resetPollTimeout() {
    this._pollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollTimeoutInput() {
    return this._pollTimeout;
  }

  // reboot - computed: false, optional: true, required: false
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

  // ssh_host - computed: false, optional: true, required: false
  private _sshHost?: string; 
  public get sshHost() {
    return this.getStringAttribute('ssh_host');
  }
  public set sshHost(value: string) {
    this._sshHost = value;
  }
  public resetSshHost() {
    this._sshHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostInput() {
    return this._sshHost;
  }

  // ssh_host_pubkey - computed: false, optional: false, required: true
  private _sshHostPubkey?: string; 
  public get sshHostPubkey() {
    return this.getStringAttribute('ssh_host_pubkey');
  }
  public set sshHostPubkey(value: string) {
    this._sshHostPubkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostPubkeyInput() {
    return this._sshHostPubkey;
  }

  // ssh_password - computed: false, optional: true, required: false
  private _sshPassword?: string; 
  public get sshPassword() {
    return this.getStringAttribute('ssh_password');
  }
  public set sshPassword(value: string) {
    this._sshPassword = value;
  }
  public resetSshPassword() {
    this._sshPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword;
  }

  // ssh_port - computed: true, optional: true, required: false
  private _sshPort?: number; 
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }
  public set sshPort(value: number) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // ssh_username - computed: false, optional: true, required: false
  private _sshUsername?: string; 
  public get sshUsername() {
    return this.getStringAttribute('ssh_username');
  }
  public set sshUsername(value: string) {
    this._sshUsername = value;
  }
  public resetSshUsername() {
    this._sshUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUsernameInput() {
    return this._sshUsername;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NslicenseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NslicenseTimeouts) {
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
      license_file: cdktf.stringToTerraform(this._licenseFile),
      poll_delay: cdktf.stringToTerraform(this._pollDelay),
      poll_interval: cdktf.stringToTerraform(this._pollInterval),
      poll_timeout: cdktf.stringToTerraform(this._pollTimeout),
      reboot: cdktf.booleanToTerraform(this._reboot),
      ssh_host: cdktf.stringToTerraform(this._sshHost),
      ssh_host_pubkey: cdktf.stringToTerraform(this._sshHostPubkey),
      ssh_password: cdktf.stringToTerraform(this._sshPassword),
      ssh_port: cdktf.numberToTerraform(this._sshPort),
      ssh_username: cdktf.stringToTerraform(this._sshUsername),
      timeouts: nslicenseTimeoutsToTerraform(this._timeouts.internalValue),
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
      license_file: {
        value: cdktf.stringToHclTerraform(this._licenseFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_delay: {
        value: cdktf.stringToHclTerraform(this._pollDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_interval: {
        value: cdktf.stringToHclTerraform(this._pollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_timeout: {
        value: cdktf.stringToHclTerraform(this._pollTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reboot: {
        value: cdktf.booleanToHclTerraform(this._reboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_host: {
        value: cdktf.stringToHclTerraform(this._sshHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_host_pubkey: {
        value: cdktf.stringToHclTerraform(this._sshHostPubkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_password: {
        value: cdktf.stringToHclTerraform(this._sshPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_port: {
        value: cdktf.numberToHclTerraform(this._sshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_username: {
        value: cdktf.stringToHclTerraform(this._sshUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: nslicenseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NslicenseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
