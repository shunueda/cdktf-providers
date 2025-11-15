// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_vpn_site_to_site_ipsec_peers_slas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceVpnSiteToSiteIpsecPeersSlasConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IPsec SLA policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_vpn_site_to_site_ipsec_peers_slas#items ApplianceVpnSiteToSiteIpsecPeersSlas#items}
  */
  readonly items: ApplianceVpnSiteToSiteIpsecPeersSlasItems[] | cdktf.IResolvable;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_vpn_site_to_site_ipsec_peers_slas#organization_id ApplianceVpnSiteToSiteIpsecPeersSlas#organization_id}
  */
  readonly organizationId: string;
}
export interface ApplianceVpnSiteToSiteIpsecPeersSlasItems {
  /**
  * SLA policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_vpn_site_to_site_ipsec_peers_slas#name ApplianceVpnSiteToSiteIpsecPeersSlas#name}
  */
  readonly name: string;
  /**
  * Endpoint for testing SLA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_vpn_site_to_site_ipsec_peers_slas#uri ApplianceVpnSiteToSiteIpsecPeersSlas#uri}
  */
  readonly uri: string;
}

export function applianceVpnSiteToSiteIpsecPeersSlasItemsToTerraform(struct?: ApplianceVpnSiteToSiteIpsecPeersSlasItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function applianceVpnSiteToSiteIpsecPeersSlasItemsToHclTerraform(struct?: ApplianceVpnSiteToSiteIpsecPeersSlasItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceVpnSiteToSiteIpsecPeersSlasItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVpnSiteToSiteIpsecPeersSlasItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceVpnSiteToSiteIpsecPeersSlasItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uri = value.uri;
    }
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class ApplianceVpnSiteToSiteIpsecPeersSlasItemsList extends cdktf.ComplexList {
  public internalValue? : ApplianceVpnSiteToSiteIpsecPeersSlasItems[] | cdktf.IResolvable

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
  public get(index: number): ApplianceVpnSiteToSiteIpsecPeersSlasItemsOutputReference {
    return new ApplianceVpnSiteToSiteIpsecPeersSlasItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_vpn_site_to_site_ipsec_peers_slas meraki_appliance_vpn_site_to_site_ipsec_peers_slas}
*/
export class ApplianceVpnSiteToSiteIpsecPeersSlas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_vpn_site_to_site_ipsec_peers_slas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceVpnSiteToSiteIpsecPeersSlas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceVpnSiteToSiteIpsecPeersSlas to import
  * @param importFromId The id of the existing ApplianceVpnSiteToSiteIpsecPeersSlas that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_vpn_site_to_site_ipsec_peers_slas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceVpnSiteToSiteIpsecPeersSlas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_vpn_site_to_site_ipsec_peers_slas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_vpn_site_to_site_ipsec_peers_slas meraki_appliance_vpn_site_to_site_ipsec_peers_slas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceVpnSiteToSiteIpsecPeersSlasConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceVpnSiteToSiteIpsecPeersSlasConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_vpn_site_to_site_ipsec_peers_slas',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApplianceVpnSiteToSiteIpsecPeersSlasItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApplianceVpnSiteToSiteIpsecPeersSlasItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(applianceVpnSiteToSiteIpsecPeersSlasItemsToTerraform, false)(this._items.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(applianceVpnSiteToSiteIpsecPeersSlasItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceVpnSiteToSiteIpsecPeersSlasItemsList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
