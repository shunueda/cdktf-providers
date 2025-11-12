// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_inventory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgInventoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Property key can be the device Claim Code or the device MAC Address:
  *   * Claim Code: used to claim the device to the Mist Organization and manage it. Format is `[0-9A-Z]{15}` (e.g `01234ABCDE56789`)
  *   * MAC Address: used to manage a device already in the Mist Organization (claimed or adopted devices). Format is `[0-9a-f]{12}` (e.g `5684dae9ac8b`)
  * 
  *     >
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_inventory#inventory OrgInventory#inventory}
  */
  readonly inventory?: { [key: string]: OrgInventoryInventory } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_inventory#org_id OrgInventory#org_id}
  */
  readonly orgId: string;
}
export interface OrgInventoryInventory {
  /**
  * Site ID. Used to assign device to a Site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_inventory#site_id OrgInventory#site_id}
  */
  readonly siteId?: string;
  /**
  * Unclaim the device from the Mist Organization when removed from the provider inventory. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_inventory#unclaim_when_destroyed OrgInventory#unclaim_when_destroyed}
  */
  readonly unclaimWhenDestroyed?: boolean | cdktf.IResolvable;
}

export function orgInventoryInventoryToTerraform(struct?: OrgInventoryInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_id: cdktf.stringToTerraform(struct!.siteId),
    unclaim_when_destroyed: cdktf.booleanToTerraform(struct!.unclaimWhenDestroyed),
  }
}


export function orgInventoryInventoryToHclTerraform(struct?: OrgInventoryInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unclaim_when_destroyed: {
      value: cdktf.booleanToHclTerraform(struct!.unclaimWhenDestroyed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgInventoryInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgInventoryInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._unclaimWhenDestroyed !== undefined) {
      hasAnyValues = true;
      internalValueResult.unclaimWhenDestroyed = this._unclaimWhenDestroyed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgInventoryInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._siteId = undefined;
      this._unclaimWhenDestroyed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._siteId = value.siteId;
      this._unclaimWhenDestroyed = value.unclaimWhenDestroyed;
    }
  }

  // claim_code - computed: true, optional: false, required: false
  public get claimCode() {
    return this.getStringAttribute('claim_code');
  }

  // deviceprofile_id - computed: true, optional: false, required: false
  public get deviceprofileId() {
    return this.getStringAttribute('deviceprofile_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unclaim_when_destroyed - computed: true, optional: true, required: false
  private _unclaimWhenDestroyed?: boolean | cdktf.IResolvable; 
  public get unclaimWhenDestroyed() {
    return this.getBooleanAttribute('unclaim_when_destroyed');
  }
  public set unclaimWhenDestroyed(value: boolean | cdktf.IResolvable) {
    this._unclaimWhenDestroyed = value;
  }
  public resetUnclaimWhenDestroyed() {
    this._unclaimWhenDestroyed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unclaimWhenDestroyedInput() {
    return this._unclaimWhenDestroyed;
  }

  // vc_mac - computed: true, optional: false, required: false
  public get vcMac() {
    return this.getStringAttribute('vc_mac');
  }
}

export class OrgInventoryInventoryMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgInventoryInventory } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgInventoryInventoryOutputReference {
    return new OrgInventoryInventoryOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_inventory mist_org_inventory}
*/
export class OrgInventory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_inventory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgInventory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgInventory to import
  * @param importFromId The id of the existing OrgInventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_inventory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgInventory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_inventory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_inventory mist_org_inventory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgInventoryConfig
  */
  public constructor(scope: Construct, id: string, config: OrgInventoryConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_inventory',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._inventory.internalValue = config.inventory;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // inventory - computed: true, optional: true, required: false
  private _inventory = new OrgInventoryInventoryMap(this, "inventory");
  public get inventory() {
    return this._inventory;
  }
  public putInventory(value: { [key: string]: OrgInventoryInventory } | cdktf.IResolvable) {
    this._inventory.internalValue = value;
  }
  public resetInventory() {
    this._inventory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory.internalValue;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      inventory: cdktf.hashMapper(orgInventoryInventoryToTerraform)(this._inventory.internalValue),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      inventory: {
        value: cdktf.hashMapperHcl(orgInventoryInventoryToHclTerraform)(this._inventory.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgInventoryInventoryMap",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
