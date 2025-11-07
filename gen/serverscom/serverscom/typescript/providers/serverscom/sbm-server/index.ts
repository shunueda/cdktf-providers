// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SbmServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#flavor SbmServer#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#hostname SbmServer#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#id SbmServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#labels SbmServer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#location SbmServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#operating_system SbmServer#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#private_ipv4_address SbmServer#private_ipv4_address}
  */
  readonly privateIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#private_ipv4_network_id SbmServer#private_ipv4_network_id}
  */
  readonly privateIpv4NetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#public_ipv4_address SbmServer#public_ipv4_address}
  */
  readonly publicIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#public_ipv4_network_id SbmServer#public_ipv4_network_id}
  */
  readonly publicIpv4NetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#ssh_key_fingerprints SbmServer#ssh_key_fingerprints}
  */
  readonly sshKeyFingerprints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#user_data SbmServer#user_data}
  */
  readonly userData?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#timeouts SbmServer#timeouts}
  */
  readonly timeouts?: SbmServerTimeouts;
}
export interface SbmServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#create SbmServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#delete SbmServer#delete}
  */
  readonly delete?: string;
}

export function sbmServerTimeoutsToTerraform(struct?: SbmServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function sbmServerTimeoutsToHclTerraform(struct?: SbmServerTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SbmServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SbmServerTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SbmServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server serverscom_sbm_server}
*/
export class SbmServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_sbm_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SbmServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SbmServer to import
  * @param importFromId The id of the existing SbmServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SbmServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_sbm_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/resources/sbm_server serverscom_sbm_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SbmServerConfig
  */
  public constructor(scope: Construct, id: string, config: SbmServerConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_sbm_server',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flavor = config.flavor;
    this._hostname = config.hostname;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._operatingSystem = config.operatingSystem;
    this._privateIpv4Address = config.privateIpv4Address;
    this._privateIpv4NetworkId = config.privateIpv4NetworkId;
    this._publicIpv4Address = config.publicIpv4Address;
    this._publicIpv4NetworkId = config.publicIpv4NetworkId;
    this._sshKeyFingerprints = config.sshKeyFingerprints;
    this._userData = config.userData;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // private_ipv4_address - computed: true, optional: true, required: false
  private _privateIpv4Address?: string; 
  public get privateIpv4Address() {
    return this.getStringAttribute('private_ipv4_address');
  }
  public set privateIpv4Address(value: string) {
    this._privateIpv4Address = value;
  }
  public resetPrivateIpv4Address() {
    this._privateIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4AddressInput() {
    return this._privateIpv4Address;
  }

  // private_ipv4_network_id - computed: false, optional: true, required: false
  private _privateIpv4NetworkId?: string; 
  public get privateIpv4NetworkId() {
    return this.getStringAttribute('private_ipv4_network_id');
  }
  public set privateIpv4NetworkId(value: string) {
    this._privateIpv4NetworkId = value;
  }
  public resetPrivateIpv4NetworkId() {
    this._privateIpv4NetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4NetworkIdInput() {
    return this._privateIpv4NetworkId;
  }

  // public_ipv4_address - computed: true, optional: true, required: false
  private _publicIpv4Address?: string; 
  public get publicIpv4Address() {
    return this.getStringAttribute('public_ipv4_address');
  }
  public set publicIpv4Address(value: string) {
    this._publicIpv4Address = value;
  }
  public resetPublicIpv4Address() {
    this._publicIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpv4AddressInput() {
    return this._publicIpv4Address;
  }

  // public_ipv4_network_id - computed: false, optional: true, required: false
  private _publicIpv4NetworkId?: string; 
  public get publicIpv4NetworkId() {
    return this.getStringAttribute('public_ipv4_network_id');
  }
  public set publicIpv4NetworkId(value: string) {
    this._publicIpv4NetworkId = value;
  }
  public resetPublicIpv4NetworkId() {
    this._publicIpv4NetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpv4NetworkIdInput() {
    return this._publicIpv4NetworkId;
  }

  // ssh_key_fingerprints - computed: false, optional: true, required: false
  private _sshKeyFingerprints?: string[]; 
  public get sshKeyFingerprints() {
    return this.getListAttribute('ssh_key_fingerprints');
  }
  public set sshKeyFingerprints(value: string[]) {
    this._sshKeyFingerprints = value;
  }
  public resetSshKeyFingerprints() {
    this._sshKeyFingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyFingerprintsInput() {
    return this._sshKeyFingerprints;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SbmServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SbmServerTimeouts) {
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
      flavor: cdktf.stringToTerraform(this._flavor),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      private_ipv4_address: cdktf.stringToTerraform(this._privateIpv4Address),
      private_ipv4_network_id: cdktf.stringToTerraform(this._privateIpv4NetworkId),
      public_ipv4_address: cdktf.stringToTerraform(this._publicIpv4Address),
      public_ipv4_network_id: cdktf.stringToTerraform(this._publicIpv4NetworkId),
      ssh_key_fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeyFingerprints),
      user_data: cdktf.stringToTerraform(this._userData),
      timeouts: sbmServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._privateIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv4_network_id: {
        value: cdktf.stringToHclTerraform(this._privateIpv4NetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._publicIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ipv4_network_id: {
        value: cdktf.stringToHclTerraform(this._publicIpv4NetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_fingerprints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeyFingerprints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sbmServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SbmServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
