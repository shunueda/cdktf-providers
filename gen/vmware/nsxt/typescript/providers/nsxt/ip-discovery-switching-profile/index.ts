// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDiscoverySwitchingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Limit for the amount of ARP bindings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#arp_bindings_limit IpDiscoverySwitchingProfile#arp_bindings_limit}
  */
  readonly arpBindingsLimit?: number;
  /**
  * Indicates whether ARP snooping is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#arp_snooping_enabled IpDiscoverySwitchingProfile#arp_snooping_enabled}
  */
  readonly arpSnoopingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#description IpDiscoverySwitchingProfile#description}
  */
  readonly description?: string;
  /**
  * Indicates whether DHCP snooping is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#dhcp_snooping_enabled IpDiscoverySwitchingProfile#dhcp_snooping_enabled}
  */
  readonly dhcpSnoopingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#display_name IpDiscoverySwitchingProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#id IpDiscoverySwitchingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicating whether VM tools will be enabled. This option is only supported on ESX where vm-tools is installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#vm_tools_enabled IpDiscoverySwitchingProfile#vm_tools_enabled}
  */
  readonly vmToolsEnabled?: boolean | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#tag IpDiscoverySwitchingProfile#tag}
  */
  readonly tag?: IpDiscoverySwitchingProfileTag[] | cdktf.IResolvable;
}
export interface IpDiscoverySwitchingProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#scope IpDiscoverySwitchingProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#tag IpDiscoverySwitchingProfile#tag}
  */
  readonly tag?: string;
}

export function ipDiscoverySwitchingProfileTagToTerraform(struct?: IpDiscoverySwitchingProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function ipDiscoverySwitchingProfileTagToHclTerraform(struct?: IpDiscoverySwitchingProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpDiscoverySwitchingProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpDiscoverySwitchingProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpDiscoverySwitchingProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class IpDiscoverySwitchingProfileTagList extends cdktf.ComplexList {
  public internalValue? : IpDiscoverySwitchingProfileTag[] | cdktf.IResolvable

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
  public get(index: number): IpDiscoverySwitchingProfileTagOutputReference {
    return new IpDiscoverySwitchingProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile nsxt_ip_discovery_switching_profile}
*/
export class IpDiscoverySwitchingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_ip_discovery_switching_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDiscoverySwitchingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDiscoverySwitchingProfile to import
  * @param importFromId The id of the existing IpDiscoverySwitchingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDiscoverySwitchingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_ip_discovery_switching_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_discovery_switching_profile nsxt_ip_discovery_switching_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDiscoverySwitchingProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpDiscoverySwitchingProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_ip_discovery_switching_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpBindingsLimit = config.arpBindingsLimit;
    this._arpSnoopingEnabled = config.arpSnoopingEnabled;
    this._description = config.description;
    this._dhcpSnoopingEnabled = config.dhcpSnoopingEnabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._vmToolsEnabled = config.vmToolsEnabled;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_bindings_limit - computed: false, optional: true, required: false
  private _arpBindingsLimit?: number; 
  public get arpBindingsLimit() {
    return this.getNumberAttribute('arp_bindings_limit');
  }
  public set arpBindingsLimit(value: number) {
    this._arpBindingsLimit = value;
  }
  public resetArpBindingsLimit() {
    this._arpBindingsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpBindingsLimitInput() {
    return this._arpBindingsLimit;
  }

  // arp_snooping_enabled - computed: false, optional: true, required: false
  private _arpSnoopingEnabled?: boolean | cdktf.IResolvable; 
  public get arpSnoopingEnabled() {
    return this.getBooleanAttribute('arp_snooping_enabled');
  }
  public set arpSnoopingEnabled(value: boolean | cdktf.IResolvable) {
    this._arpSnoopingEnabled = value;
  }
  public resetArpSnoopingEnabled() {
    this._arpSnoopingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpSnoopingEnabledInput() {
    return this._arpSnoopingEnabled;
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

  // dhcp_snooping_enabled - computed: false, optional: true, required: false
  private _dhcpSnoopingEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpSnoopingEnabled() {
    return this.getBooleanAttribute('dhcp_snooping_enabled');
  }
  public set dhcpSnoopingEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpSnoopingEnabled = value;
  }
  public resetDhcpSnoopingEnabled() {
    this._dhcpSnoopingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingEnabledInput() {
    return this._dhcpSnoopingEnabled;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // vm_tools_enabled - computed: false, optional: true, required: false
  private _vmToolsEnabled?: boolean | cdktf.IResolvable; 
  public get vmToolsEnabled() {
    return this.getBooleanAttribute('vm_tools_enabled');
  }
  public set vmToolsEnabled(value: boolean | cdktf.IResolvable) {
    this._vmToolsEnabled = value;
  }
  public resetVmToolsEnabled() {
    this._vmToolsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmToolsEnabledInput() {
    return this._vmToolsEnabled;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new IpDiscoverySwitchingProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: IpDiscoverySwitchingProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_bindings_limit: cdktf.numberToTerraform(this._arpBindingsLimit),
      arp_snooping_enabled: cdktf.booleanToTerraform(this._arpSnoopingEnabled),
      description: cdktf.stringToTerraform(this._description),
      dhcp_snooping_enabled: cdktf.booleanToTerraform(this._dhcpSnoopingEnabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      vm_tools_enabled: cdktf.booleanToTerraform(this._vmToolsEnabled),
      tag: cdktf.listMapper(ipDiscoverySwitchingProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_bindings_limit: {
        value: cdktf.numberToHclTerraform(this._arpBindingsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_snooping_enabled: {
        value: cdktf.booleanToHclTerraform(this._arpSnoopingEnabled),
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
      dhcp_snooping_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpSnoopingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      vm_tools_enabled: {
        value: cdktf.booleanToHclTerraform(this._vmToolsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag: {
        value: cdktf.listMapperHcl(ipDiscoverySwitchingProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpDiscoverySwitchingProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
