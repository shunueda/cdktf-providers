// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtocolsSanLunMapsResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#cx_profile_name ProtocolsSanLunMapsResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#igroup ProtocolsSanLunMapsResource#igroup}
  */
  readonly igroup: ProtocolsSanLunMapsResourceIgroup;
  /**
  * If no value is provided, ONTAP assigns the lowest available value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#logical_unit_number ProtocolsSanLunMapsResource#logical_unit_number}
  */
  readonly logicalUnitNumber?: number;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#lun ProtocolsSanLunMapsResource#lun}
  */
  readonly lun: ProtocolsSanLunMapsResourceLun;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#svm ProtocolsSanLunMapsResource#svm}
  */
  readonly svm: ProtocolsSanLunMapsResourceSvm;
}
export interface ProtocolsSanLunMapsResourceIgroup {
  /**
  * name of the igroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#name ProtocolsSanLunMapsResource#name}
  */
  readonly name: string;
}

export function protocolsSanLunMapsResourceIgroupToTerraform(struct?: ProtocolsSanLunMapsResourceIgroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function protocolsSanLunMapsResourceIgroupToHclTerraform(struct?: ProtocolsSanLunMapsResourceIgroup | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolsSanLunMapsResourceIgroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProtocolsSanLunMapsResourceIgroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolsSanLunMapsResourceIgroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface ProtocolsSanLunMapsResourceLun {
  /**
  * name of the lun
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#name ProtocolsSanLunMapsResource#name}
  */
  readonly name: string;
}

export function protocolsSanLunMapsResourceLunToTerraform(struct?: ProtocolsSanLunMapsResourceLun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function protocolsSanLunMapsResourceLunToHclTerraform(struct?: ProtocolsSanLunMapsResourceLun | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolsSanLunMapsResourceLunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProtocolsSanLunMapsResourceLun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolsSanLunMapsResourceLun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface ProtocolsSanLunMapsResourceSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#name ProtocolsSanLunMapsResource#name}
  */
  readonly name: string;
}

export function protocolsSanLunMapsResourceSvmToTerraform(struct?: ProtocolsSanLunMapsResourceSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function protocolsSanLunMapsResourceSvmToHclTerraform(struct?: ProtocolsSanLunMapsResourceSvm | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolsSanLunMapsResourceSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProtocolsSanLunMapsResourceSvm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolsSanLunMapsResourceSvm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource netapp-ontap_protocols_san_lun-maps_resource}
*/
export class ProtocolsSanLunMapsResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_san_lun-maps_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtocolsSanLunMapsResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtocolsSanLunMapsResource to import
  * @param importFromId The id of the existing ProtocolsSanLunMapsResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtocolsSanLunMapsResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_san_lun-maps_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/protocols_san_lun-maps_resource netapp-ontap_protocols_san_lun-maps_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtocolsSanLunMapsResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ProtocolsSanLunMapsResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_san_lun-maps_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._igroup.internalValue = config.igroup;
    this._logicalUnitNumber = config.logicalUnitNumber;
    this._lun.internalValue = config.lun;
    this._svm.internalValue = config.svm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // igroup - computed: false, optional: false, required: true
  private _igroup = new ProtocolsSanLunMapsResourceIgroupOutputReference(this, "igroup");
  public get igroup() {
    return this._igroup;
  }
  public putIgroup(value: ProtocolsSanLunMapsResourceIgroup) {
    this._igroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get igroupInput() {
    return this._igroup.internalValue;
  }

  // logical_unit_number - computed: true, optional: true, required: false
  private _logicalUnitNumber?: number; 
  public get logicalUnitNumber() {
    return this.getNumberAttribute('logical_unit_number');
  }
  public set logicalUnitNumber(value: number) {
    this._logicalUnitNumber = value;
  }
  public resetLogicalUnitNumber() {
    this._logicalUnitNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalUnitNumberInput() {
    return this._logicalUnitNumber;
  }

  // lun - computed: false, optional: false, required: true
  private _lun = new ProtocolsSanLunMapsResourceLunOutputReference(this, "lun");
  public get lun() {
    return this._lun;
  }
  public putLun(value: ProtocolsSanLunMapsResourceLun) {
    this._lun.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun.internalValue;
  }

  // svm - computed: false, optional: false, required: true
  private _svm = new ProtocolsSanLunMapsResourceSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: ProtocolsSanLunMapsResourceSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      igroup: protocolsSanLunMapsResourceIgroupToTerraform(this._igroup.internalValue),
      logical_unit_number: cdktf.numberToTerraform(this._logicalUnitNumber),
      lun: protocolsSanLunMapsResourceLunToTerraform(this._lun.internalValue),
      svm: protocolsSanLunMapsResourceSvmToTerraform(this._svm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igroup: {
        value: protocolsSanLunMapsResourceIgroupToHclTerraform(this._igroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProtocolsSanLunMapsResourceIgroup",
      },
      logical_unit_number: {
        value: cdktf.numberToHclTerraform(this._logicalUnitNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lun: {
        value: protocolsSanLunMapsResourceLunToHclTerraform(this._lun.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProtocolsSanLunMapsResourceLun",
      },
      svm: {
        value: protocolsSanLunMapsResourceSvmToHclTerraform(this._svm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProtocolsSanLunMapsResourceSvm",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
