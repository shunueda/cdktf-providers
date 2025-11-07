// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The administrative state of the network. Acceptable values are "true" and "false". Changing this value updates the state of the existing network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#admin_state_up NetworkingNetwork#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Human-readable description of the network. Changing this updates the name of the existing network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#description NetworkingNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#id NetworkingNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the network. Changing this updates the name of the existing network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#name NetworkingNetwork#name}
  */
  readonly name?: string;
  /**
  * Whether to explicitly enable or disable port security on the network. Port Security is usually enabled by default, so omitting this argument will usually result in a value of "true". Setting this explicitly to `false` will disable port security. Valid values are `true` and `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#port_security_enabled NetworkingNetwork#port_security_enabled}
  */
  readonly portSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Private dns domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#private_dns_domain NetworkingNetwork#private_dns_domain}
  */
  readonly privateDnsDomain?: string;
  /**
  * The region in which to obtain the Networking client. A Networking client is needed to create a network. If omitted, the `region` argument of the provider is used. Changing this creates a new network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#region NetworkingNetwork#region}
  */
  readonly region?: string;
  /**
  * SDN to use for this resource. Must be one of following: "neutron", "sprut". Default value is project's default SDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#sdn NetworkingNetwork#sdn}
  */
  readonly sdn?: string;
  /**
  * A set of string tags for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#tags NetworkingNetwork#tags}
  */
  readonly tags?: string[];
  /**
  * Map of additional options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#value_specs NetworkingNetwork#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string };
  /**
  * Whether VKCS services access is enabled. This feature should be enabled globally for your project. Access can be enabled for new or existing networks, but cannot be disabled for existing networks. Valid values are `true` and `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#vkcs_services_access NetworkingNetwork#vkcs_services_access}
  */
  readonly vkcsServicesAccess?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#timeouts NetworkingNetwork#timeouts}
  */
  readonly timeouts?: NetworkingNetworkTimeouts;
}
export interface NetworkingNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#create NetworkingNetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#delete NetworkingNetwork#delete}
  */
  readonly delete?: string;
}

export function networkingNetworkTimeoutsToTerraform(struct?: NetworkingNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function networkingNetworkTimeoutsToHclTerraform(struct?: NetworkingNetworkTimeouts | cdktf.IResolvable): any {
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

export class NetworkingNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingNetworkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkingNetworkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network vkcs_networking_network}
*/
export class NetworkingNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_networking_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingNetwork to import
  * @param importFromId The id of the existing NetworkingNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_networking_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/networking_network vkcs_networking_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkingNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_networking_network',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminStateUp = config.adminStateUp;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._portSecurityEnabled = config.portSecurityEnabled;
    this._privateDnsDomain = config.privateDnsDomain;
    this._region = config.region;
    this._sdn = config.sdn;
    this._tags = config.tags;
    this._valueSpecs = config.valueSpecs;
    this._vkcsServicesAccess = config.vkcsServicesAccess;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
  }

  // all_tags - computed: true, optional: false, required: false
  public get allTags() {
    return cdktf.Fn.tolist(this.getListAttribute('all_tags'));
  }

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

  // name - computed: false, optional: true, required: false
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

  // port_security_enabled - computed: false, optional: true, required: false
  private _portSecurityEnabled?: boolean | cdktf.IResolvable; 
  public get portSecurityEnabled() {
    return this.getBooleanAttribute('port_security_enabled');
  }
  public set portSecurityEnabled(value: boolean | cdktf.IResolvable) {
    this._portSecurityEnabled = value;
  }
  public resetPortSecurityEnabled() {
    this._portSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityEnabledInput() {
    return this._portSecurityEnabled;
  }

  // private_dns_domain - computed: true, optional: true, required: false
  private _privateDnsDomain?: string; 
  public get privateDnsDomain() {
    return this.getStringAttribute('private_dns_domain');
  }
  public set privateDnsDomain(value: string) {
    this._privateDnsDomain = value;
  }
  public resetPrivateDnsDomain() {
    this._privateDnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsDomainInput() {
    return this._privateDnsDomain;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sdn - computed: true, optional: true, required: false
  private _sdn?: string; 
  public get sdn() {
    return this.getStringAttribute('sdn');
  }
  public set sdn(value: string) {
    this._sdn = value;
  }
  public resetSdn() {
    this._sdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnInput() {
    return this._sdn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string }; 
  public get valueSpecs() {
    return this.getStringMapAttribute('value_specs');
  }
  public set valueSpecs(value: { [key: string]: string }) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs;
  }

  // vkcs_services_access - computed: false, optional: true, required: false
  private _vkcsServicesAccess?: boolean | cdktf.IResolvable; 
  public get vkcsServicesAccess() {
    return this.getBooleanAttribute('vkcs_services_access');
  }
  public set vkcsServicesAccess(value: boolean | cdktf.IResolvable) {
    this._vkcsServicesAccess = value;
  }
  public resetVkcsServicesAccess() {
    this._vkcsServicesAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vkcsServicesAccessInput() {
    return this._vkcsServicesAccess;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingNetworkTimeouts) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port_security_enabled: cdktf.booleanToTerraform(this._portSecurityEnabled),
      private_dns_domain: cdktf.stringToTerraform(this._privateDnsDomain),
      region: cdktf.stringToTerraform(this._region),
      sdn: cdktf.stringToTerraform(this._sdn),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      value_specs: cdktf.hashMapper(cdktf.stringToTerraform)(this._valueSpecs),
      vkcs_services_access: cdktf.booleanToTerraform(this._vkcsServicesAccess),
      timeouts: networkingNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state_up: {
        value: cdktf.booleanToHclTerraform(this._adminStateUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_security_enabled: {
        value: cdktf.booleanToHclTerraform(this._portSecurityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_dns_domain: {
        value: cdktf.stringToHclTerraform(this._privateDnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn: {
        value: cdktf.stringToHclTerraform(this._sdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      value_specs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._valueSpecs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vkcs_services_access: {
        value: cdktf.booleanToHclTerraform(this._vkcsServicesAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: networkingNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
