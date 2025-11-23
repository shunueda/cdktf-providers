// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessListStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#device AccessListStandard#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#entries AccessListStandard#entries}
  */
  readonly entries?: AccessListStandardEntries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#name AccessListStandard#name}
  */
  readonly name: string;
}
export interface AccessListStandardEntries {
  /**
  * Any source prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#deny_any AccessListStandard#deny_any}
  */
  readonly denyAny?: boolean | cdktf.IResolvable;
  /**
  * A single source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#deny_host AccessListStandard#deny_host}
  */
  readonly denyHost?: string;
  /**
  * Log matches against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#deny_log AccessListStandard#deny_log}
  */
  readonly denyLog?: boolean | cdktf.IResolvable;
  /**
  * Network address prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#deny_prefix AccessListStandard#deny_prefix}
  */
  readonly denyPrefix?: string;
  /**
  * Wildcard bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#deny_prefix_mask AccessListStandard#deny_prefix_mask}
  */
  readonly denyPrefixMask?: string;
  /**
  * Any source prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#permit_any AccessListStandard#permit_any}
  */
  readonly permitAny?: boolean | cdktf.IResolvable;
  /**
  * A single source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#permit_host AccessListStandard#permit_host}
  */
  readonly permitHost?: string;
  /**
  * Log matches against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#permit_log AccessListStandard#permit_log}
  */
  readonly permitLog?: boolean | cdktf.IResolvable;
  /**
  * Network address prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#permit_prefix AccessListStandard#permit_prefix}
  */
  readonly permitPrefix?: string;
  /**
  * Wildcard bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#permit_prefix_mask AccessListStandard#permit_prefix_mask}
  */
  readonly permitPrefixMask?: string;
  /**
  * Access list entry comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#remark AccessListStandard#remark}
  */
  readonly remark?: string;
  /**
  * 
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#sequence AccessListStandard#sequence}
  */
  readonly sequence: number;
}

export function accessListStandardEntriesToTerraform(struct?: AccessListStandardEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_any: cdktf.booleanToTerraform(struct!.denyAny),
    deny_host: cdktf.stringToTerraform(struct!.denyHost),
    deny_log: cdktf.booleanToTerraform(struct!.denyLog),
    deny_prefix: cdktf.stringToTerraform(struct!.denyPrefix),
    deny_prefix_mask: cdktf.stringToTerraform(struct!.denyPrefixMask),
    permit_any: cdktf.booleanToTerraform(struct!.permitAny),
    permit_host: cdktf.stringToTerraform(struct!.permitHost),
    permit_log: cdktf.booleanToTerraform(struct!.permitLog),
    permit_prefix: cdktf.stringToTerraform(struct!.permitPrefix),
    permit_prefix_mask: cdktf.stringToTerraform(struct!.permitPrefixMask),
    remark: cdktf.stringToTerraform(struct!.remark),
    sequence: cdktf.numberToTerraform(struct!.sequence),
  }
}


export function accessListStandardEntriesToHclTerraform(struct?: AccessListStandardEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_any: {
      value: cdktf.booleanToHclTerraform(struct!.denyAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_host: {
      value: cdktf.stringToHclTerraform(struct!.denyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_log: {
      value: cdktf.booleanToHclTerraform(struct!.denyLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_prefix: {
      value: cdktf.stringToHclTerraform(struct!.denyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_prefix_mask: {
      value: cdktf.stringToHclTerraform(struct!.denyPrefixMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_any: {
      value: cdktf.booleanToHclTerraform(struct!.permitAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_host: {
      value: cdktf.stringToHclTerraform(struct!.permitHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_log: {
      value: cdktf.booleanToHclTerraform(struct!.permitLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_prefix: {
      value: cdktf.stringToHclTerraform(struct!.permitPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_prefix_mask: {
      value: cdktf.stringToHclTerraform(struct!.permitPrefixMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remark: {
      value: cdktf.stringToHclTerraform(struct!.remark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence: {
      value: cdktf.numberToHclTerraform(struct!.sequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessListStandardEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessListStandardEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAny = this._denyAny;
    }
    if (this._denyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyHost = this._denyHost;
    }
    if (this._denyLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyLog = this._denyLog;
    }
    if (this._denyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPrefix = this._denyPrefix;
    }
    if (this._denyPrefixMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPrefixMask = this._denyPrefixMask;
    }
    if (this._permitAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitAny = this._permitAny;
    }
    if (this._permitHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitHost = this._permitHost;
    }
    if (this._permitLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitLog = this._permitLog;
    }
    if (this._permitPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPrefix = this._permitPrefix;
    }
    if (this._permitPrefixMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPrefixMask = this._permitPrefixMask;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    if (this._sequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessListStandardEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyAny = undefined;
      this._denyHost = undefined;
      this._denyLog = undefined;
      this._denyPrefix = undefined;
      this._denyPrefixMask = undefined;
      this._permitAny = undefined;
      this._permitHost = undefined;
      this._permitLog = undefined;
      this._permitPrefix = undefined;
      this._permitPrefixMask = undefined;
      this._remark = undefined;
      this._sequence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyAny = value.denyAny;
      this._denyHost = value.denyHost;
      this._denyLog = value.denyLog;
      this._denyPrefix = value.denyPrefix;
      this._denyPrefixMask = value.denyPrefixMask;
      this._permitAny = value.permitAny;
      this._permitHost = value.permitHost;
      this._permitLog = value.permitLog;
      this._permitPrefix = value.permitPrefix;
      this._permitPrefixMask = value.permitPrefixMask;
      this._remark = value.remark;
      this._sequence = value.sequence;
    }
  }

  // deny_any - computed: false, optional: true, required: false
  private _denyAny?: boolean | cdktf.IResolvable; 
  public get denyAny() {
    return this.getBooleanAttribute('deny_any');
  }
  public set denyAny(value: boolean | cdktf.IResolvable) {
    this._denyAny = value;
  }
  public resetDenyAny() {
    this._denyAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAnyInput() {
    return this._denyAny;
  }

  // deny_host - computed: false, optional: true, required: false
  private _denyHost?: string; 
  public get denyHost() {
    return this.getStringAttribute('deny_host');
  }
  public set denyHost(value: string) {
    this._denyHost = value;
  }
  public resetDenyHost() {
    this._denyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyHostInput() {
    return this._denyHost;
  }

  // deny_log - computed: false, optional: true, required: false
  private _denyLog?: boolean | cdktf.IResolvable; 
  public get denyLog() {
    return this.getBooleanAttribute('deny_log');
  }
  public set denyLog(value: boolean | cdktf.IResolvable) {
    this._denyLog = value;
  }
  public resetDenyLog() {
    this._denyLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyLogInput() {
    return this._denyLog;
  }

  // deny_prefix - computed: false, optional: true, required: false
  private _denyPrefix?: string; 
  public get denyPrefix() {
    return this.getStringAttribute('deny_prefix');
  }
  public set denyPrefix(value: string) {
    this._denyPrefix = value;
  }
  public resetDenyPrefix() {
    this._denyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPrefixInput() {
    return this._denyPrefix;
  }

  // deny_prefix_mask - computed: false, optional: true, required: false
  private _denyPrefixMask?: string; 
  public get denyPrefixMask() {
    return this.getStringAttribute('deny_prefix_mask');
  }
  public set denyPrefixMask(value: string) {
    this._denyPrefixMask = value;
  }
  public resetDenyPrefixMask() {
    this._denyPrefixMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPrefixMaskInput() {
    return this._denyPrefixMask;
  }

  // permit_any - computed: false, optional: true, required: false
  private _permitAny?: boolean | cdktf.IResolvable; 
  public get permitAny() {
    return this.getBooleanAttribute('permit_any');
  }
  public set permitAny(value: boolean | cdktf.IResolvable) {
    this._permitAny = value;
  }
  public resetPermitAny() {
    this._permitAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitAnyInput() {
    return this._permitAny;
  }

  // permit_host - computed: false, optional: true, required: false
  private _permitHost?: string; 
  public get permitHost() {
    return this.getStringAttribute('permit_host');
  }
  public set permitHost(value: string) {
    this._permitHost = value;
  }
  public resetPermitHost() {
    this._permitHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitHostInput() {
    return this._permitHost;
  }

  // permit_log - computed: false, optional: true, required: false
  private _permitLog?: boolean | cdktf.IResolvable; 
  public get permitLog() {
    return this.getBooleanAttribute('permit_log');
  }
  public set permitLog(value: boolean | cdktf.IResolvable) {
    this._permitLog = value;
  }
  public resetPermitLog() {
    this._permitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogInput() {
    return this._permitLog;
  }

  // permit_prefix - computed: false, optional: true, required: false
  private _permitPrefix?: string; 
  public get permitPrefix() {
    return this.getStringAttribute('permit_prefix');
  }
  public set permitPrefix(value: string) {
    this._permitPrefix = value;
  }
  public resetPermitPrefix() {
    this._permitPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPrefixInput() {
    return this._permitPrefix;
  }

  // permit_prefix_mask - computed: false, optional: true, required: false
  private _permitPrefixMask?: string; 
  public get permitPrefixMask() {
    return this.getStringAttribute('permit_prefix_mask');
  }
  public set permitPrefixMask(value: string) {
    this._permitPrefixMask = value;
  }
  public resetPermitPrefixMask() {
    this._permitPrefixMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPrefixMaskInput() {
    return this._permitPrefixMask;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // sequence - computed: false, optional: false, required: true
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }
}

export class AccessListStandardEntriesList extends cdktf.ComplexList {
  public internalValue? : AccessListStandardEntries[] | cdktf.IResolvable

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
  public get(index: number): AccessListStandardEntriesOutputReference {
    return new AccessListStandardEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard iosxe_access_list_standard}
*/
export class AccessListStandard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_access_list_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessListStandard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessListStandard to import
  * @param importFromId The id of the existing AccessListStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessListStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_access_list_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/access_list_standard iosxe_access_list_standard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessListStandardConfig
  */
  public constructor(scope: Construct, id: string, config: AccessListStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_access_list_standard',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
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
    this._entries.internalValue = config.entries;
    this._name = config.name;
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

  // entries - computed: false, optional: true, required: false
  private _entries = new AccessListStandardEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: AccessListStandardEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      entries: cdktf.listMapper(accessListStandardEntriesToTerraform, false)(this._entries.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      entries: {
        value: cdktf.listMapperHcl(accessListStandardEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessListStandardEntriesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
