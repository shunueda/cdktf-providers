// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Restricted mode of the cluster. Accepted values are `None`, `Guid`, `ApprovedIp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system#restricted_mode System#restricted_mode}
  */
  readonly restrictedMode: string;
  /**
  * Specifies list of SDC IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system#sdc_approved_ips System#sdc_approved_ips}
  */
  readonly sdcApprovedIps?: SystemSdcApprovedIps[] | cdktf.IResolvable;
  /**
  * Specifies list of SDC GUIDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system#sdc_guids System#sdc_guids}
  */
  readonly sdcGuids?: string[];
  /**
  * Specifies list of SDC IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system#sdc_ids System#sdc_ids}
  */
  readonly sdcIds?: string[];
  /**
  * Specifies list of SDC names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system#sdc_names System#sdc_names}
  */
  readonly sdcNames?: string[];
}
export interface SystemSdcApprovedIps {
  /**
  * SDC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system#id System#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * SDC IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system#ips System#ips}
  */
  readonly ips: string[];
}

export function systemSdcApprovedIpsToTerraform(struct?: SystemSdcApprovedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
  }
}


export function systemSdcApprovedIpsToHclTerraform(struct?: SystemSdcApprovedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdcApprovedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdcApprovedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdcApprovedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ips = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ips = value.ips;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ips - computed: false, optional: false, required: true
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }
}

export class SystemSdcApprovedIpsList extends cdktf.ComplexList {
  public internalValue? : SystemSdcApprovedIps[] | cdktf.IResolvable

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
  public get(index: number): SystemSdcApprovedIpsOutputReference {
    return new SystemSdcApprovedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system powerflex_system}
*/
export class System extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a System resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the System to import
  * @param importFromId The id of the existing System that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the System to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/system powerflex_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfig
  */
  public constructor(scope: Construct, id: string, config: SystemConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_system',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
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
    this._restrictedMode = config.restrictedMode;
    this._sdcApprovedIps.internalValue = config.sdcApprovedIps;
    this._sdcGuids = config.sdcGuids;
    this._sdcIds = config.sdcIds;
    this._sdcNames = config.sdcNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // restricted_mode - computed: false, optional: false, required: true
  private _restrictedMode?: string; 
  public get restrictedMode() {
    return this.getStringAttribute('restricted_mode');
  }
  public set restrictedMode(value: string) {
    this._restrictedMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedModeInput() {
    return this._restrictedMode;
  }

  // sdc_approved_ips - computed: false, optional: true, required: false
  private _sdcApprovedIps = new SystemSdcApprovedIpsList(this, "sdc_approved_ips", false);
  public get sdcApprovedIps() {
    return this._sdcApprovedIps;
  }
  public putSdcApprovedIps(value: SystemSdcApprovedIps[] | cdktf.IResolvable) {
    this._sdcApprovedIps.internalValue = value;
  }
  public resetSdcApprovedIps() {
    this._sdcApprovedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcApprovedIpsInput() {
    return this._sdcApprovedIps.internalValue;
  }

  // sdc_guids - computed: true, optional: true, required: false
  private _sdcGuids?: string[]; 
  public get sdcGuids() {
    return this.getListAttribute('sdc_guids');
  }
  public set sdcGuids(value: string[]) {
    this._sdcGuids = value;
  }
  public resetSdcGuids() {
    this._sdcGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcGuidsInput() {
    return this._sdcGuids;
  }

  // sdc_ids - computed: false, optional: true, required: false
  private _sdcIds?: string[]; 
  public get sdcIds() {
    return this.getListAttribute('sdc_ids');
  }
  public set sdcIds(value: string[]) {
    this._sdcIds = value;
  }
  public resetSdcIds() {
    this._sdcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcIdsInput() {
    return this._sdcIds;
  }

  // sdc_names - computed: false, optional: true, required: false
  private _sdcNames?: string[]; 
  public get sdcNames() {
    return this.getListAttribute('sdc_names');
  }
  public set sdcNames(value: string[]) {
    this._sdcNames = value;
  }
  public resetSdcNames() {
    this._sdcNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcNamesInput() {
    return this._sdcNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      restricted_mode: cdktf.stringToTerraform(this._restrictedMode),
      sdc_approved_ips: cdktf.listMapper(systemSdcApprovedIpsToTerraform, false)(this._sdcApprovedIps.internalValue),
      sdc_guids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sdcGuids),
      sdc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sdcIds),
      sdc_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sdcNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      restricted_mode: {
        value: cdktf.stringToHclTerraform(this._restrictedMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdc_approved_ips: {
        value: cdktf.listMapperHcl(systemSdcApprovedIpsToHclTerraform, false)(this._sdcApprovedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdcApprovedIpsList",
      },
      sdc_guids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sdcGuids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sdc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sdcIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sdc_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sdcNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
