// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistOrgInventoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#mac DataMistOrgInventory#mac}
  */
  readonly mac?: string;
  /**
  * Device model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#model DataMistOrgInventory#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#org_id DataMistOrgInventory#org_id}
  */
  readonly orgId: string;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#serial DataMistOrgInventory#serial}
  */
  readonly serial?: string;
  /**
  * Site id if assigned, null if not assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#site_id DataMistOrgInventory#site_id}
  */
  readonly siteId?: string;
  /**
  * enum: `ap`, `gateway`, `switch`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#type DataMistOrgInventory#type}
  */
  readonly type?: string;
  /**
  * To display Unassigned devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#unassigned DataMistOrgInventory#unassigned}
  */
  readonly unassigned?: boolean | cdktf.IResolvable;
  /**
  * To display Virtual Chassis members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#vc DataMistOrgInventory#vc}
  */
  readonly vc?: boolean | cdktf.IResolvable;
  /**
  * Virtual Chassis MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#vc_mac DataMistOrgInventory#vc_mac}
  */
  readonly vcMac?: string;
}
export interface DataMistOrgInventoryOrgInventory {
}

export function dataMistOrgInventoryOrgInventoryToTerraform(struct?: DataMistOrgInventoryOrgInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgInventoryOrgInventoryToHclTerraform(struct?: DataMistOrgInventoryOrgInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgInventoryOrgInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMistOrgInventoryOrgInventory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgInventoryOrgInventory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adopted - computed: true, optional: false, required: false
  public get adopted() {
    return this.getBooleanAttribute('adopted');
  }

  // chassis_mac - computed: true, optional: false, required: false
  public get chassisMac() {
    return this.getStringAttribute('chassis_mac');
  }

  // chassis_serial - computed: true, optional: false, required: false
  public get chassisSerial() {
    return this.getStringAttribute('chassis_serial');
  }

  // claim_code - computed: true, optional: false, required: false
  public get claimCode() {
    return this.getStringAttribute('claim_code');
  }

  // connected - computed: true, optional: false, required: false
  public get connected() {
    return this.getBooleanAttribute('connected');
  }

  // deviceprofile_id - computed: true, optional: false, required: false
  public get deviceprofileId() {
    return this.getStringAttribute('deviceprofile_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hw_rev - computed: true, optional: false, required: false
  public get hwRev() {
    return this.getStringAttribute('hw_rev');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jsi - computed: true, optional: false, required: false
  public get jsi() {
    return this.getBooleanAttribute('jsi');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vc_mac - computed: true, optional: false, required: false
  public get vcMac() {
    return this.getStringAttribute('vc_mac');
  }
}

export class DataMistOrgInventoryOrgInventoryList extends cdktf.ComplexList {

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
  public get(index: number): DataMistOrgInventoryOrgInventoryOutputReference {
    return new DataMistOrgInventoryOrgInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory mist_org_inventory}
*/
export class DataMistOrgInventory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_inventory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistOrgInventory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistOrgInventory to import
  * @param importFromId The id of the existing DataMistOrgInventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistOrgInventory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_inventory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_inventory mist_org_inventory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistOrgInventoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistOrgInventoryConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_inventory',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._mac = config.mac;
    this._model = config.model;
    this._orgId = config.orgId;
    this._serial = config.serial;
    this._siteId = config.siteId;
    this._type = config.type;
    this._unassigned = config.unassigned;
    this._vc = config.vc;
    this._vcMac = config.vcMac;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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

  // org_inventory - computed: true, optional: false, required: false
  private _orgInventory = new DataMistOrgInventoryOrgInventoryList(this, "org_inventory", true);
  public get orgInventory() {
    return this._orgInventory;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // site_id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unassigned - computed: false, optional: true, required: false
  private _unassigned?: boolean | cdktf.IResolvable; 
  public get unassigned() {
    return this.getBooleanAttribute('unassigned');
  }
  public set unassigned(value: boolean | cdktf.IResolvable) {
    this._unassigned = value;
  }
  public resetUnassigned() {
    this._unassigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unassignedInput() {
    return this._unassigned;
  }

  // vc - computed: false, optional: true, required: false
  private _vc?: boolean | cdktf.IResolvable; 
  public get vc() {
    return this.getBooleanAttribute('vc');
  }
  public set vc(value: boolean | cdktf.IResolvable) {
    this._vc = value;
  }
  public resetVc() {
    this._vc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcInput() {
    return this._vc;
  }

  // vc_mac - computed: false, optional: true, required: false
  private _vcMac?: string; 
  public get vcMac() {
    return this.getStringAttribute('vc_mac');
  }
  public set vcMac(value: string) {
    this._vcMac = value;
  }
  public resetVcMac() {
    this._vcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcMacInput() {
    return this._vcMac;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mac: cdktf.stringToTerraform(this._mac),
      model: cdktf.stringToTerraform(this._model),
      org_id: cdktf.stringToTerraform(this._orgId),
      serial: cdktf.stringToTerraform(this._serial),
      site_id: cdktf.stringToTerraform(this._siteId),
      type: cdktf.stringToTerraform(this._type),
      unassigned: cdktf.booleanToTerraform(this._unassigned),
      vc: cdktf.booleanToTerraform(this._vc),
      vc_mac: cdktf.stringToTerraform(this._vcMac),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unassigned: {
        value: cdktf.booleanToHclTerraform(this._unassigned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vc: {
        value: cdktf.booleanToHclTerraform(this._vc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vc_mac: {
        value: cdktf.stringToHclTerraform(this._vcMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
