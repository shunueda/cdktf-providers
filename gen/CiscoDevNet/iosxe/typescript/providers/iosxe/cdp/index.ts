// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#device Cdp#device}
  */
  readonly device?: string;
  /**
  * Apply tlv-list globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#filter_tlv_list Cdp#filter_tlv_list}
  */
  readonly filterTlvList?: string;
  /**
  * Specify the holdtime (in sec) to be sent in packets
  *   - Range: `10`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#holdtime Cdp#holdtime}
  */
  readonly holdtime?: number;
  /**
  * Enable CDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#run Cdp#run}
  */
  readonly run?: boolean | cdktf.IResolvable;
  /**
  * Specify the rate at which CDP packets are sent (in sec)
  *   - Range: `5`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#timer Cdp#timer}
  */
  readonly timer?: number;
  /**
  * Configure tlv-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#tlv_lists Cdp#tlv_lists}
  */
  readonly tlvLists?: CdpTlvLists[] | cdktf.IResolvable;
}
export interface CdpTlvLists {
  /**
  * Select cos TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#cos Cdp#cos}
  */
  readonly cos?: boolean | cdktf.IResolvable;
  /**
  * Select duplex TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#duplex Cdp#duplex}
  */
  readonly duplex?: boolean | cdktf.IResolvable;
  /**
  * Tlv-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#name Cdp#name}
  */
  readonly name: string;
  /**
  * Select trust TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#trust Cdp#trust}
  */
  readonly trust?: boolean | cdktf.IResolvable;
  /**
  * Select version TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#version Cdp#version}
  */
  readonly version?: boolean | cdktf.IResolvable;
  /**
  * Select vtp mgmt domain TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#vtp_mgmt_domain Cdp#vtp_mgmt_domain}
  */
  readonly vtpMgmtDomain?: boolean | cdktf.IResolvable;
}

export function cdpTlvListsToTerraform(struct?: CdpTlvLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos: cdktf.booleanToTerraform(struct!.cos),
    duplex: cdktf.booleanToTerraform(struct!.duplex),
    name: cdktf.stringToTerraform(struct!.name),
    trust: cdktf.booleanToTerraform(struct!.trust),
    version: cdktf.booleanToTerraform(struct!.version),
    vtp_mgmt_domain: cdktf.booleanToTerraform(struct!.vtpMgmtDomain),
  }
}


export function cdpTlvListsToHclTerraform(struct?: CdpTlvLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos: {
      value: cdktf.booleanToHclTerraform(struct!.cos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    duplex: {
      value: cdktf.booleanToHclTerraform(struct!.duplex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust: {
      value: cdktf.booleanToHclTerraform(struct!.trust),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.booleanToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vtp_mgmt_domain: {
      value: cdktf.booleanToHclTerraform(struct!.vtpMgmtDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdpTlvListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdpTlvLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cos !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos = this._cos;
    }
    if (this._duplex !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplex = this._duplex;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._trust !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vtpMgmtDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtpMgmtDomain = this._vtpMgmtDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdpTlvLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cos = undefined;
      this._duplex = undefined;
      this._name = undefined;
      this._trust = undefined;
      this._version = undefined;
      this._vtpMgmtDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cos = value.cos;
      this._duplex = value.duplex;
      this._name = value.name;
      this._trust = value.trust;
      this._version = value.version;
      this._vtpMgmtDomain = value.vtpMgmtDomain;
    }
  }

  // cos - computed: false, optional: true, required: false
  private _cos?: boolean | cdktf.IResolvable; 
  public get cos() {
    return this.getBooleanAttribute('cos');
  }
  public set cos(value: boolean | cdktf.IResolvable) {
    this._cos = value;
  }
  public resetCos() {
    this._cos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInput() {
    return this._cos;
  }

  // duplex - computed: false, optional: true, required: false
  private _duplex?: boolean | cdktf.IResolvable; 
  public get duplex() {
    return this.getBooleanAttribute('duplex');
  }
  public set duplex(value: boolean | cdktf.IResolvable) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
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

  // trust - computed: false, optional: true, required: false
  private _trust?: boolean | cdktf.IResolvable; 
  public get trust() {
    return this.getBooleanAttribute('trust');
  }
  public set trust(value: boolean | cdktf.IResolvable) {
    this._trust = value;
  }
  public resetTrust() {
    this._trust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust;
  }

  // version - computed: false, optional: true, required: false
  private _version?: boolean | cdktf.IResolvable; 
  public get version() {
    return this.getBooleanAttribute('version');
  }
  public set version(value: boolean | cdktf.IResolvable) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vtp_mgmt_domain - computed: false, optional: true, required: false
  private _vtpMgmtDomain?: boolean | cdktf.IResolvable; 
  public get vtpMgmtDomain() {
    return this.getBooleanAttribute('vtp_mgmt_domain');
  }
  public set vtpMgmtDomain(value: boolean | cdktf.IResolvable) {
    this._vtpMgmtDomain = value;
  }
  public resetVtpMgmtDomain() {
    this._vtpMgmtDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtpMgmtDomainInput() {
    return this._vtpMgmtDomain;
  }
}

export class CdpTlvListsList extends cdktf.ComplexList {
  public internalValue? : CdpTlvLists[] | cdktf.IResolvable

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
  public get(index: number): CdpTlvListsOutputReference {
    return new CdpTlvListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp iosxe_cdp}
*/
export class Cdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_cdp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cdp to import
  * @param importFromId The id of the existing Cdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_cdp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/cdp iosxe_cdp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CdpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_cdp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._filterTlvList = config.filterTlvList;
    this._holdtime = config.holdtime;
    this._run = config.run;
    this._timer = config.timer;
    this._tlvLists.internalValue = config.tlvLists;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // filter_tlv_list - computed: false, optional: true, required: false
  private _filterTlvList?: string; 
  public get filterTlvList() {
    return this.getStringAttribute('filter_tlv_list');
  }
  public set filterTlvList(value: string) {
    this._filterTlvList = value;
  }
  public resetFilterTlvList() {
    this._filterTlvList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTlvListInput() {
    return this._filterTlvList;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // run - computed: false, optional: true, required: false
  private _run?: boolean | cdktf.IResolvable; 
  public get run() {
    return this.getBooleanAttribute('run');
  }
  public set run(value: boolean | cdktf.IResolvable) {
    this._run = value;
  }
  public resetRun() {
    this._run = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // tlv_lists - computed: false, optional: true, required: false
  private _tlvLists = new CdpTlvListsList(this, "tlv_lists", false);
  public get tlvLists() {
    return this._tlvLists;
  }
  public putTlvLists(value: CdpTlvLists[] | cdktf.IResolvable) {
    this._tlvLists.internalValue = value;
  }
  public resetTlvLists() {
    this._tlvLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvListsInput() {
    return this._tlvLists.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      filter_tlv_list: cdktf.stringToTerraform(this._filterTlvList),
      holdtime: cdktf.numberToTerraform(this._holdtime),
      run: cdktf.booleanToTerraform(this._run),
      timer: cdktf.numberToTerraform(this._timer),
      tlv_lists: cdktf.listMapper(cdpTlvListsToTerraform, false)(this._tlvLists.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_tlv_list: {
        value: cdktf.stringToHclTerraform(this._filterTlvList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holdtime: {
        value: cdktf.numberToHclTerraform(this._holdtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run: {
        value: cdktf.booleanToHclTerraform(this._run),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timer: {
        value: cdktf.numberToHclTerraform(this._timer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlv_lists: {
        value: cdktf.listMapperHcl(cdpTlvListsToHclTerraform, false)(this._tlvLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdpTlvListsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
