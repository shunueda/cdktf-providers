// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mode of the MDM cluster. Accepted values are `ThreeNodes` and `FiveNodes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#cluster_mode MdmCluster#cluster_mode}
  */
  readonly clusterMode: string;
  /**
  * Performance profile of the MDM cluster. Accepted values are `Compact` and `HighPerformance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#performance_profile MdmCluster#performance_profile}
  */
  readonly performanceProfile?: string;
  /**
  * Primary MDM details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#primary_mdm MdmCluster#primary_mdm}
  */
  readonly primaryMdm: MdmClusterPrimaryMdm;
  /**
  * Secondary MDM details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#secondary_mdm MdmCluster#secondary_mdm}
  */
  readonly secondaryMdm: MdmClusterSecondaryMdm[] | cdktf.IResolvable;
  /**
  * StandBy MDM details. StandBy MDM can be added/removed/promoted to manager/tiebreaker role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#standby_mdm MdmCluster#standby_mdm}
  */
  readonly standbyMdm?: MdmClusterStandbyMdm[] | cdktf.IResolvable;
  /**
  * TieBreaker MDM details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#tiebreaker_mdm MdmCluster#tiebreaker_mdm}
  */
  readonly tiebreakerMdm: MdmClusterTiebreakerMdm[] | cdktf.IResolvable;
}
export interface MdmClusterPrimaryMdm {
  /**
  * ID of the primary MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#id MdmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Ips of the primary MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#ips MdmCluster#ips}
  */
  readonly ips?: string[];
  /**
  * Name of the the primary MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#name MdmCluster#name}
  */
  readonly name?: string;
}

export function mdmClusterPrimaryMdmToTerraform(struct?: MdmClusterPrimaryMdm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function mdmClusterPrimaryMdmToHclTerraform(struct?: MdmClusterPrimaryMdm | cdktf.IResolvable): any {
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

export class MdmClusterPrimaryMdmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmClusterPrimaryMdm | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmClusterPrimaryMdm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ips = undefined;
      this._name = undefined;
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
      this._name = value.name;
    }
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

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // management_ips - computed: true, optional: false, required: false
  public get managementIps() {
    return cdktf.Fn.tolist(this.getListAttribute('management_ips'));
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface MdmClusterSecondaryMdm {
  /**
  * ID of the secondary MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#id MdmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Ips of the secondary MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#ips MdmCluster#ips}
  */
  readonly ips?: string[];
  /**
  * Name of the the secondary MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#name MdmCluster#name}
  */
  readonly name?: string;
}

export function mdmClusterSecondaryMdmToTerraform(struct?: MdmClusterSecondaryMdm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function mdmClusterSecondaryMdmToHclTerraform(struct?: MdmClusterSecondaryMdm | cdktf.IResolvable): any {
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

export class MdmClusterSecondaryMdmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdmClusterSecondaryMdm | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmClusterSecondaryMdm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ips = undefined;
      this._name = undefined;
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
      this._name = value.name;
    }
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

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // management_ips - computed: true, optional: false, required: false
  public get managementIps() {
    return cdktf.Fn.tolist(this.getListAttribute('management_ips'));
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class MdmClusterSecondaryMdmList extends cdktf.ComplexList {
  public internalValue? : MdmClusterSecondaryMdm[] | cdktf.IResolvable

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
  public get(index: number): MdmClusterSecondaryMdmOutputReference {
    return new MdmClusterSecondaryMdmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdmClusterStandbyMdm {
  /**
  * Allow the added MDM to have a different number of IPs from the primary MDM. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#allow_asymmetric_ips MdmCluster#allow_asymmetric_ips}
  */
  readonly allowAsymmetricIps?: boolean | cdktf.IResolvable;
  /**
  * The Ips of the standby MDM. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#ips MdmCluster#ips}
  */
  readonly ips: string[];
  /**
  * The management ips of the standby MDM. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#management_ips MdmCluster#management_ips}
  */
  readonly managementIps?: string[];
  /**
  * Name of the the standby MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#name MdmCluster#name}
  */
  readonly name?: string;
  /**
  * Port of the standby MDM. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#port MdmCluster#port}
  */
  readonly port?: number;
  /**
  * Role of the standby mdm. Accepted values are `Manager` and `TieBreaker`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#role MdmCluster#role}
  */
  readonly role: string;
}

export function mdmClusterStandbyMdmToTerraform(struct?: MdmClusterStandbyMdm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_asymmetric_ips: cdktf.booleanToTerraform(struct!.allowAsymmetricIps),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    management_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managementIps),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function mdmClusterStandbyMdmToHclTerraform(struct?: MdmClusterStandbyMdm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_asymmetric_ips: {
      value: cdktf.booleanToHclTerraform(struct!.allowAsymmetricIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    management_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managementIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdmClusterStandbyMdmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdmClusterStandbyMdm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAsymmetricIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAsymmetricIps = this._allowAsymmetricIps;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._managementIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIps = this._managementIps;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmClusterStandbyMdm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAsymmetricIps = undefined;
      this._ips = undefined;
      this._managementIps = undefined;
      this._name = undefined;
      this._port = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAsymmetricIps = value.allowAsymmetricIps;
      this._ips = value.ips;
      this._managementIps = value.managementIps;
      this._name = value.name;
      this._port = value.port;
      this._role = value.role;
    }
  }

  // allow_asymmetric_ips - computed: true, optional: true, required: false
  private _allowAsymmetricIps?: boolean | cdktf.IResolvable; 
  public get allowAsymmetricIps() {
    return this.getBooleanAttribute('allow_asymmetric_ips');
  }
  public set allowAsymmetricIps(value: boolean | cdktf.IResolvable) {
    this._allowAsymmetricIps = value;
  }
  public resetAllowAsymmetricIps() {
    this._allowAsymmetricIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsymmetricIpsInput() {
    return this._allowAsymmetricIps;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: true, optional: false, required: true
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

  // management_ips - computed: true, optional: true, required: false
  private _managementIps?: string[]; 
  public get managementIps() {
    return cdktf.Fn.tolist(this.getListAttribute('management_ips'));
  }
  public set managementIps(value: string[]) {
    this._managementIps = value;
  }
  public resetManagementIps() {
    this._managementIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpsInput() {
    return this._managementIps;
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class MdmClusterStandbyMdmList extends cdktf.ComplexList {
  public internalValue? : MdmClusterStandbyMdm[] | cdktf.IResolvable

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
  public get(index: number): MdmClusterStandbyMdmOutputReference {
    return new MdmClusterStandbyMdmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdmClusterTiebreakerMdm {
  /**
  * ID of the tiebreaker MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#id MdmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Ips of the tiebreaker MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#ips MdmCluster#ips}
  */
  readonly ips?: string[];
  /**
  * Name of the the tiebreaker MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#name MdmCluster#name}
  */
  readonly name?: string;
}

export function mdmClusterTiebreakerMdmToTerraform(struct?: MdmClusterTiebreakerMdm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function mdmClusterTiebreakerMdmToHclTerraform(struct?: MdmClusterTiebreakerMdm | cdktf.IResolvable): any {
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

export class MdmClusterTiebreakerMdmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdmClusterTiebreakerMdm | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmClusterTiebreakerMdm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ips = undefined;
      this._name = undefined;
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
      this._name = value.name;
    }
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

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // management_ips - computed: true, optional: false, required: false
  public get managementIps() {
    return cdktf.Fn.tolist(this.getListAttribute('management_ips'));
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class MdmClusterTiebreakerMdmList extends cdktf.ComplexList {
  public internalValue? : MdmClusterTiebreakerMdm[] | cdktf.IResolvable

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
  public get(index: number): MdmClusterTiebreakerMdmOutputReference {
    return new MdmClusterTiebreakerMdmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster powerflex_mdm_cluster}
*/
export class MdmCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_mdm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmCluster to import
  * @param importFromId The id of the existing MdmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_mdm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/mdm_cluster powerflex_mdm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_mdm_cluster',
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
    this._clusterMode = config.clusterMode;
    this._performanceProfile = config.performanceProfile;
    this._primaryMdm.internalValue = config.primaryMdm;
    this._secondaryMdm.internalValue = config.secondaryMdm;
    this._standbyMdm.internalValue = config.standbyMdm;
    this._tiebreakerMdm.internalValue = config.tiebreakerMdm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_mode - computed: false, optional: false, required: true
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }

  // primary_mdm - computed: false, optional: false, required: true
  private _primaryMdm = new MdmClusterPrimaryMdmOutputReference(this, "primary_mdm");
  public get primaryMdm() {
    return this._primaryMdm;
  }
  public putPrimaryMdm(value: MdmClusterPrimaryMdm) {
    this._primaryMdm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryMdmInput() {
    return this._primaryMdm.internalValue;
  }

  // secondary_mdm - computed: false, optional: false, required: true
  private _secondaryMdm = new MdmClusterSecondaryMdmList(this, "secondary_mdm", false);
  public get secondaryMdm() {
    return this._secondaryMdm;
  }
  public putSecondaryMdm(value: MdmClusterSecondaryMdm[] | cdktf.IResolvable) {
    this._secondaryMdm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryMdmInput() {
    return this._secondaryMdm.internalValue;
  }

  // standby_mdm - computed: true, optional: true, required: false
  private _standbyMdm = new MdmClusterStandbyMdmList(this, "standby_mdm", false);
  public get standbyMdm() {
    return this._standbyMdm;
  }
  public putStandbyMdm(value: MdmClusterStandbyMdm[] | cdktf.IResolvable) {
    this._standbyMdm.internalValue = value;
  }
  public resetStandbyMdm() {
    this._standbyMdm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyMdmInput() {
    return this._standbyMdm.internalValue;
  }

  // tiebreaker_mdm - computed: false, optional: false, required: true
  private _tiebreakerMdm = new MdmClusterTiebreakerMdmList(this, "tiebreaker_mdm", false);
  public get tiebreakerMdm() {
    return this._tiebreakerMdm;
  }
  public putTiebreakerMdm(value: MdmClusterTiebreakerMdm[] | cdktf.IResolvable) {
    this._tiebreakerMdm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tiebreakerMdmInput() {
    return this._tiebreakerMdm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_mode: cdktf.stringToTerraform(this._clusterMode),
      performance_profile: cdktf.stringToTerraform(this._performanceProfile),
      primary_mdm: mdmClusterPrimaryMdmToTerraform(this._primaryMdm.internalValue),
      secondary_mdm: cdktf.listMapper(mdmClusterSecondaryMdmToTerraform, false)(this._secondaryMdm.internalValue),
      standby_mdm: cdktf.listMapper(mdmClusterStandbyMdmToTerraform, false)(this._standbyMdm.internalValue),
      tiebreaker_mdm: cdktf.listMapper(mdmClusterTiebreakerMdmToTerraform, false)(this._tiebreakerMdm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_mode: {
        value: cdktf.stringToHclTerraform(this._clusterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_profile: {
        value: cdktf.stringToHclTerraform(this._performanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_mdm: {
        value: mdmClusterPrimaryMdmToHclTerraform(this._primaryMdm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmClusterPrimaryMdm",
      },
      secondary_mdm: {
        value: cdktf.listMapperHcl(mdmClusterSecondaryMdmToHclTerraform, false)(this._secondaryMdm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdmClusterSecondaryMdmList",
      },
      standby_mdm: {
        value: cdktf.listMapperHcl(mdmClusterStandbyMdmToHclTerraform, false)(this._standbyMdm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdmClusterStandbyMdmList",
      },
      tiebreaker_mdm: {
        value: cdktf.listMapperHcl(mdmClusterTiebreakerMdmToHclTerraform, false)(this._tiebreakerMdm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdmClusterTiebreakerMdmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
