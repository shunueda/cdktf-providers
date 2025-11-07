// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * app access type, e.g: access, transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#app_access_type Policy#app_access_type}
  */
  readonly appAccessType?: string;
  /**
  * only applicable for access app access type, set it to true to enable device posture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#device_posture_configured Policy#device_posture_configured}
  */
  readonly devicePostureConfigured?: boolean | cdktf.IResolvable;
  /**
  * name of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * Policy Namespace, only applicable for transit app_access_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#namespace Policy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#teamid Policy#teamid}
  */
  readonly teamid?: string;
  /**
  * type of policy, e.g: default, managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#types Policy#types}
  */
  readonly types?: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#details Policy#details}
  */
  readonly details: PolicyDetails[] | cdktf.IResolvable;
}
export interface PolicyDetailsAppsSelecteditems {
  /**
  * Name of the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#name Policy#name}
  */
  readonly name?: string;
}

export function policyDetailsAppsSelecteditemsToTerraform(struct?: PolicyDetailsAppsSelecteditems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function policyDetailsAppsSelecteditemsToHclTerraform(struct?: PolicyDetailsAppsSelecteditems | cdktf.IResolvable): any {
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

export class PolicyDetailsAppsSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsAppsSelecteditems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyDetailsAppsSelecteditems | cdktf.IResolvable | undefined) {
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
}

export class PolicyDetailsAppsSelecteditemsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsAppsSelecteditems[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsAppsSelecteditemsOutputReference {
    return new PolicyDetailsAppsSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsApps {
  /**
  * selecteditems block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#selecteditems Policy#selecteditems}
  */
  readonly selecteditems?: PolicyDetailsAppsSelecteditems[] | cdktf.IResolvable;
}

export function policyDetailsAppsToTerraform(struct?: PolicyDetailsApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selecteditems: cdktf.listMapper(policyDetailsAppsSelecteditemsToTerraform, true)(struct!.selecteditems),
  }
}


export function policyDetailsAppsToHclTerraform(struct?: PolicyDetailsApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selecteditems: {
      value: cdktf.listMapperHcl(policyDetailsAppsSelecteditemsToHclTerraform, true)(struct!.selecteditems),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsAppsSelecteditemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsApps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selecteditems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selecteditems = this._selecteditems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsApps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selecteditems.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selecteditems.internalValue = value.selecteditems;
    }
  }

  // selecteditems - computed: false, optional: true, required: false
  private _selecteditems = new PolicyDetailsAppsSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
  public putSelecteditems(value: PolicyDetailsAppsSelecteditems[] | cdktf.IResolvable) {
    this._selecteditems.internalValue = value;
  }
  public resetSelecteditems() {
    this._selecteditems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selecteditemsInput() {
    return this._selecteditems.internalValue;
  }
}

export class PolicyDetailsAppsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsApps[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsAppsOutputReference {
    return new PolicyDetailsAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetails {
  /**
  * FQDNs which need to be excluded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#fqdn_inverse_match Policy#fqdn_inverse_match}
  */
  readonly fqdnInverseMatch?: string[];
  /**
  * FQDNs which need to be included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#fqdn_match Policy#fqdn_match}
  */
  readonly fqdnMatch?: string[];
  /**
  * List of protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#protocol Policy#protocol}
  */
  readonly protocol?: string[];
  /**
  * Source IP list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#source_ip Policy#source_ip}
  */
  readonly sourceIp?: string[];
  /**
  * Target port list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#target_port Policy#target_port}
  */
  readonly targetPort?: string[];
}

export function policyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsToTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn_inverse_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdnInverseMatch),
    fqdn_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdnMatch),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    source_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIp),
    target_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetPort),
  }
}


export function policyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsToHclTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn_inverse_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdnInverseMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fqdn_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdnMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetPort),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdnInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnInverseMatch = this._fqdnInverseMatch;
    }
    if (this._fqdnMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnMatch = this._fqdnMatch;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdnInverseMatch = undefined;
      this._fqdnMatch = undefined;
      this._protocol = undefined;
      this._sourceIp = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdnInverseMatch = value.fqdnInverseMatch;
      this._fqdnMatch = value.fqdnMatch;
      this._protocol = value.protocol;
      this._sourceIp = value.sourceIp;
      this._targetPort = value.targetPort;
    }
  }

  // fqdn_inverse_match - computed: false, optional: true, required: false
  private _fqdnInverseMatch?: string[]; 
  public get fqdnInverseMatch() {
    return this.getListAttribute('fqdn_inverse_match');
  }
  public set fqdnInverseMatch(value: string[]) {
    this._fqdnInverseMatch = value;
  }
  public resetFqdnInverseMatch() {
    this._fqdnInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInverseMatchInput() {
    return this._fqdnInverseMatch;
  }

  // fqdn_match - computed: false, optional: true, required: false
  private _fqdnMatch?: string[]; 
  public get fqdnMatch() {
    return this.getListAttribute('fqdn_match');
  }
  public set fqdnMatch(value: string[]) {
    this._fqdnMatch = value;
  }
  public resetFqdnMatch() {
    this._fqdnMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnMatchInput() {
    return this._fqdnMatch;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return this.getListAttribute('protocol');
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string[]; 
  public get sourceIp() {
    return this.getListAttribute('source_ip');
  }
  public set sourceIp(value: string[]) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string[]; 
  public get targetPort() {
    return this.getListAttribute('target_port');
  }
  public set targetPort(value: string[]) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetails[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsOutputReference {
    return new PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetails {
  /**
  * List of protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#protocol Policy#protocol}
  */
  readonly protocol?: string[];
  /**
  * Source IP list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#source_ip Policy#source_ip}
  */
  readonly sourceIp?: string[];
  /**
  * Source port list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#source_port Policy#source_port}
  */
  readonly sourcePort?: string[];
  /**
  * Target IP list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#target_ip Policy#target_ip}
  */
  readonly targetIp?: string[];
  /**
  * Target port list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#target_port Policy#target_port}
  */
  readonly targetPort?: string[];
}

export function policyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsToTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    source_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIp),
    source_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePort),
    target_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetIp),
    target_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetPort),
  }
}


export function policyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsToHclTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePort),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetPort),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._targetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIp = this._targetIp;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._sourceIp = undefined;
      this._sourcePort = undefined;
      this._targetIp = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._sourceIp = value.sourceIp;
      this._sourcePort = value.sourcePort;
      this._targetIp = value.targetIp;
      this._targetPort = value.targetPort;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return this.getListAttribute('protocol');
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string[]; 
  public get sourceIp() {
    return this.getListAttribute('source_ip');
  }
  public set sourceIp(value: string[]) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string[]; 
  public get sourcePort() {
    return this.getListAttribute('source_port');
  }
  public set sourcePort(value: string[]) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // target_ip - computed: false, optional: true, required: false
  private _targetIp?: string[]; 
  public get targetIp() {
    return this.getListAttribute('target_ip');
  }
  public set targetIp(value: string[]) {
    this._targetIp = value;
  }
  public resetTargetIp() {
    this._targetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string[]; 
  public get targetPort() {
    return this.getListAttribute('target_port');
  }
  public set targetPort(value: string[]) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetails[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsOutputReference {
    return new PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsMatchesMatchEntriesValuesInputitems {
  /**
  * Input value name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#name Policy#name}
  */
  readonly name?: string;
  /**
  * egress_fqdn_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#egress_fqdn_details Policy#egress_fqdn_details}
  */
  readonly egressFqdnDetails?: PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetails[] | cdktf.IResolvable;
  /**
  * ip_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#ip_details Policy#ip_details}
  */
  readonly ipDetails?: PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetails[] | cdktf.IResolvable;
}

export function policyDetailsMatchesMatchEntriesValuesInputitemsToTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesInputitems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    egress_fqdn_details: cdktf.listMapper(policyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsToTerraform, true)(struct!.egressFqdnDetails),
    ip_details: cdktf.listMapper(policyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsToTerraform, true)(struct!.ipDetails),
  }
}


export function policyDetailsMatchesMatchEntriesValuesInputitemsToHclTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesInputitems | cdktf.IResolvable): any {
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
    egress_fqdn_details: {
      value: cdktf.listMapperHcl(policyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsToHclTerraform, true)(struct!.egressFqdnDetails),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsList",
    },
    ip_details: {
      value: cdktf.listMapperHcl(policyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsToHclTerraform, true)(struct!.ipDetails),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsMatchesMatchEntriesValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsMatchesMatchEntriesValuesInputitems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._egressFqdnDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFqdnDetails = this._egressFqdnDetails?.internalValue;
    }
    if (this._ipDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDetails = this._ipDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsMatchesMatchEntriesValuesInputitems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._egressFqdnDetails.internalValue = undefined;
      this._ipDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._egressFqdnDetails.internalValue = value.egressFqdnDetails;
      this._ipDetails.internalValue = value.ipDetails;
    }
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

  // egress_fqdn_details - computed: false, optional: true, required: false
  private _egressFqdnDetails = new PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetailsList(this, "egress_fqdn_details", true);
  public get egressFqdnDetails() {
    return this._egressFqdnDetails;
  }
  public putEgressFqdnDetails(value: PolicyDetailsMatchesMatchEntriesValuesInputitemsEgressFqdnDetails[] | cdktf.IResolvable) {
    this._egressFqdnDetails.internalValue = value;
  }
  public resetEgressFqdnDetails() {
    this._egressFqdnDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFqdnDetailsInput() {
    return this._egressFqdnDetails.internalValue;
  }

  // ip_details - computed: false, optional: true, required: false
  private _ipDetails = new PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetailsList(this, "ip_details", true);
  public get ipDetails() {
    return this._ipDetails;
  }
  public putIpDetails(value: PolicyDetailsMatchesMatchEntriesValuesInputitemsIpDetails[] | cdktf.IResolvable) {
    this._ipDetails.internalValue = value;
  }
  public resetIpDetails() {
    this._ipDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDetailsInput() {
    return this._ipDetails.internalValue;
  }
}

export class PolicyDetailsMatchesMatchEntriesValuesInputitemsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsMatchesMatchEntriesValuesInputitems[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsMatchesMatchEntriesValuesInputitemsOutputReference {
    return new PolicyDetailsMatchesMatchEntriesValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsMatchesMatchEntriesValuesSelectedgroups {
  /**
  * Input value name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#name Policy#name}
  */
  readonly name?: string;
}

export function policyDetailsMatchesMatchEntriesValuesSelectedgroupsToTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesSelectedgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function policyDetailsMatchesMatchEntriesValuesSelectedgroupsToHclTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesSelectedgroups | cdktf.IResolvable): any {
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

export class PolicyDetailsMatchesMatchEntriesValuesSelectedgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsMatchesMatchEntriesValuesSelectedgroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyDetailsMatchesMatchEntriesValuesSelectedgroups | cdktf.IResolvable | undefined) {
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
}

export class PolicyDetailsMatchesMatchEntriesValuesSelectedgroupsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsMatchesMatchEntriesValuesSelectedgroups[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsMatchesMatchEntriesValuesSelectedgroupsOutputReference {
    return new PolicyDetailsMatchesMatchEntriesValuesSelectedgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsMatchesMatchEntriesValuesSelecteditems {
  /**
  * City name, only applicable for type location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#city_name Policy#city_name}
  */
  readonly cityName?: string;
  /**
  * Country name, only applicable for type location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#country_name Policy#country_name}
  */
  readonly countryName?: string;
  /**
  * Selected value name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#name Policy#name}
  */
  readonly name?: string;
  /**
  * State name, only applicable for type location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#state_name Policy#state_name}
  */
  readonly stateName?: string;
}

export function policyDetailsMatchesMatchEntriesValuesSelecteditemsToTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesSelecteditems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city_name: cdktf.stringToTerraform(struct!.cityName),
    country_name: cdktf.stringToTerraform(struct!.countryName),
    name: cdktf.stringToTerraform(struct!.name),
    state_name: cdktf.stringToTerraform(struct!.stateName),
  }
}


export function policyDetailsMatchesMatchEntriesValuesSelecteditemsToHclTerraform(struct?: PolicyDetailsMatchesMatchEntriesValuesSelecteditems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city_name: {
      value: cdktf.stringToHclTerraform(struct!.cityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_name: {
      value: cdktf.stringToHclTerraform(struct!.countryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_name: {
      value: cdktf.stringToHclTerraform(struct!.stateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsMatchesMatchEntriesValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsMatchesMatchEntriesValuesSelecteditems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cityName = this._cityName;
    }
    if (this._countryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryName = this._countryName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateName = this._stateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsMatchesMatchEntriesValuesSelecteditems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cityName = undefined;
      this._countryName = undefined;
      this._name = undefined;
      this._stateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cityName = value.cityName;
      this._countryName = value.countryName;
      this._name = value.name;
      this._stateName = value.stateName;
    }
  }

  // city_name - computed: false, optional: true, required: false
  private _cityName?: string; 
  public get cityName() {
    return this.getStringAttribute('city_name');
  }
  public set cityName(value: string) {
    this._cityName = value;
  }
  public resetCityName() {
    this._cityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityNameInput() {
    return this._cityName;
  }

  // country_name - computed: false, optional: true, required: false
  private _countryName?: string; 
  public get countryName() {
    return this.getStringAttribute('country_name');
  }
  public set countryName(value: string) {
    this._countryName = value;
  }
  public resetCountryName() {
    this._countryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryNameInput() {
    return this._countryName;
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

  // state_name - computed: false, optional: true, required: false
  private _stateName?: string; 
  public get stateName() {
    return this.getStringAttribute('state_name');
  }
  public set stateName(value: string) {
    this._stateName = value;
  }
  public resetStateName() {
    this._stateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNameInput() {
    return this._stateName;
  }
}

export class PolicyDetailsMatchesMatchEntriesValuesSelecteditemsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsMatchesMatchEntriesValuesSelecteditems[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsMatchesMatchEntriesValuesSelecteditemsOutputReference {
    return new PolicyDetailsMatchesMatchEntriesValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsMatchesMatchEntriesValues {
  /**
  * inputitems block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#inputitems Policy#inputitems}
  */
  readonly inputitems?: PolicyDetailsMatchesMatchEntriesValuesInputitems[] | cdktf.IResolvable;
  /**
  * selectedgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#selectedgroups Policy#selectedgroups}
  */
  readonly selectedgroups?: PolicyDetailsMatchesMatchEntriesValuesSelectedgroups[] | cdktf.IResolvable;
  /**
  * selecteditems block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#selecteditems Policy#selecteditems}
  */
  readonly selecteditems?: PolicyDetailsMatchesMatchEntriesValuesSelecteditems[] | cdktf.IResolvable;
}

export function policyDetailsMatchesMatchEntriesValuesToTerraform(struct?: PolicyDetailsMatchesMatchEntriesValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inputitems: cdktf.listMapper(policyDetailsMatchesMatchEntriesValuesInputitemsToTerraform, true)(struct!.inputitems),
    selectedgroups: cdktf.listMapper(policyDetailsMatchesMatchEntriesValuesSelectedgroupsToTerraform, true)(struct!.selectedgroups),
    selecteditems: cdktf.listMapper(policyDetailsMatchesMatchEntriesValuesSelecteditemsToTerraform, true)(struct!.selecteditems),
  }
}


export function policyDetailsMatchesMatchEntriesValuesToHclTerraform(struct?: PolicyDetailsMatchesMatchEntriesValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inputitems: {
      value: cdktf.listMapperHcl(policyDetailsMatchesMatchEntriesValuesInputitemsToHclTerraform, true)(struct!.inputitems),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsMatchesMatchEntriesValuesInputitemsList",
    },
    selectedgroups: {
      value: cdktf.listMapperHcl(policyDetailsMatchesMatchEntriesValuesSelectedgroupsToHclTerraform, true)(struct!.selectedgroups),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsMatchesMatchEntriesValuesSelectedgroupsList",
    },
    selecteditems: {
      value: cdktf.listMapperHcl(policyDetailsMatchesMatchEntriesValuesSelecteditemsToHclTerraform, true)(struct!.selecteditems),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsMatchesMatchEntriesValuesSelecteditemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsMatchesMatchEntriesValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsMatchesMatchEntriesValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputitems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputitems = this._inputitems?.internalValue;
    }
    if (this._selectedgroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedgroups = this._selectedgroups?.internalValue;
    }
    if (this._selecteditems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selecteditems = this._selecteditems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsMatchesMatchEntriesValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputitems.internalValue = undefined;
      this._selectedgroups.internalValue = undefined;
      this._selecteditems.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputitems.internalValue = value.inputitems;
      this._selectedgroups.internalValue = value.selectedgroups;
      this._selecteditems.internalValue = value.selecteditems;
    }
  }

  // inputitems - computed: false, optional: true, required: false
  private _inputitems = new PolicyDetailsMatchesMatchEntriesValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }
  public putInputitems(value: PolicyDetailsMatchesMatchEntriesValuesInputitems[] | cdktf.IResolvable) {
    this._inputitems.internalValue = value;
  }
  public resetInputitems() {
    this._inputitems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputitemsInput() {
    return this._inputitems.internalValue;
  }

  // selectedgroups - computed: false, optional: true, required: false
  private _selectedgroups = new PolicyDetailsMatchesMatchEntriesValuesSelectedgroupsList(this, "selectedgroups", true);
  public get selectedgroups() {
    return this._selectedgroups;
  }
  public putSelectedgroups(value: PolicyDetailsMatchesMatchEntriesValuesSelectedgroups[] | cdktf.IResolvable) {
    this._selectedgroups.internalValue = value;
  }
  public resetSelectedgroups() {
    this._selectedgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedgroupsInput() {
    return this._selectedgroups.internalValue;
  }

  // selecteditems - computed: false, optional: true, required: false
  private _selecteditems = new PolicyDetailsMatchesMatchEntriesValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
  public putSelecteditems(value: PolicyDetailsMatchesMatchEntriesValuesSelecteditems[] | cdktf.IResolvable) {
    this._selecteditems.internalValue = value;
  }
  public resetSelecteditems() {
    this._selecteditems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selecteditemsInput() {
    return this._selecteditems.internalValue;
  }
}

export class PolicyDetailsMatchesMatchEntriesValuesList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsMatchesMatchEntriesValues[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsMatchesMatchEntriesValuesOutputReference {
    return new PolicyDetailsMatchesMatchEntriesValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsMatchesMatchEntries {
  /**
  * Operation of the selected property, available options are Id, Is NOT, Contains, Does NOT contain, Starts with, Ends with, In, NOT in, Is at least, Between 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#operation Policy#operation}
  */
  readonly operation?: string;
  /**
  * Select property of selected type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#property Policy#property}
  */
  readonly property?: string;
  /**
  * Select policy match condition type, for access policy options are users, location, idp, devices, time, url, device-posture, fqdn and advanced. For transit type options are time, url, networkacl, fqdn, egressfqdns, prosimonetworks, networks and advanced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#values Policy#values}
  */
  readonly values?: PolicyDetailsMatchesMatchEntriesValues[] | cdktf.IResolvable;
}

export function policyDetailsMatchesMatchEntriesToTerraform(struct?: PolicyDetailsMatchesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    property: cdktf.stringToTerraform(struct!.property),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(policyDetailsMatchesMatchEntriesValuesToTerraform, true)(struct!.values),
  }
}


export function policyDetailsMatchesMatchEntriesToHclTerraform(struct?: PolicyDetailsMatchesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(policyDetailsMatchesMatchEntriesValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsMatchesMatchEntriesValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsMatchesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsMatchesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsMatchesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._property = undefined;
      this._type = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._property = value.property;
      this._type = value.type;
      this._values.internalValue = value.values;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: false, optional: true, required: false
  private _values = new PolicyDetailsMatchesMatchEntriesValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: PolicyDetailsMatchesMatchEntriesValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class PolicyDetailsMatchesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsMatchesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsMatchesMatchEntriesOutputReference {
    return new PolicyDetailsMatchesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsMatches {
  /**
  * match_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#match_entries Policy#match_entries}
  */
  readonly matchEntries?: PolicyDetailsMatchesMatchEntries[] | cdktf.IResolvable;
}

export function policyDetailsMatchesToTerraform(struct?: PolicyDetailsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_entries: cdktf.listMapper(policyDetailsMatchesMatchEntriesToTerraform, true)(struct!.matchEntries),
  }
}


export function policyDetailsMatchesToHclTerraform(struct?: PolicyDetailsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_entries: {
      value: cdktf.listMapperHcl(policyDetailsMatchesMatchEntriesToHclTerraform, true)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsMatchesMatchEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchEntries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchEntries.internalValue = value.matchEntries;
    }
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new PolicyDetailsMatchesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: PolicyDetailsMatchesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
  }
}

export class PolicyDetailsMatchesList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsMatches[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsMatchesOutputReference {
    return new PolicyDetailsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsNetworksSelecteditems {
  /**
  * Name of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#name Policy#name}
  */
  readonly name?: string;
}

export function policyDetailsNetworksSelecteditemsToTerraform(struct?: PolicyDetailsNetworksSelecteditems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function policyDetailsNetworksSelecteditemsToHclTerraform(struct?: PolicyDetailsNetworksSelecteditems | cdktf.IResolvable): any {
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

export class PolicyDetailsNetworksSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsNetworksSelecteditems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyDetailsNetworksSelecteditems | cdktf.IResolvable | undefined) {
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
}

export class PolicyDetailsNetworksSelecteditemsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsNetworksSelecteditems[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsNetworksSelecteditemsOutputReference {
    return new PolicyDetailsNetworksSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsNetworks {
  /**
  * selecteditems block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#selecteditems Policy#selecteditems}
  */
  readonly selecteditems?: PolicyDetailsNetworksSelecteditems[] | cdktf.IResolvable;
}

export function policyDetailsNetworksToTerraform(struct?: PolicyDetailsNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selecteditems: cdktf.listMapper(policyDetailsNetworksSelecteditemsToTerraform, true)(struct!.selecteditems),
  }
}


export function policyDetailsNetworksToHclTerraform(struct?: PolicyDetailsNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selecteditems: {
      value: cdktf.listMapperHcl(policyDetailsNetworksSelecteditemsToHclTerraform, true)(struct!.selecteditems),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsNetworksSelecteditemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetailsNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selecteditems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selecteditems = this._selecteditems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selecteditems.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selecteditems.internalValue = value.selecteditems;
    }
  }

  // selecteditems - computed: false, optional: true, required: false
  private _selecteditems = new PolicyDetailsNetworksSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
  public putSelecteditems(value: PolicyDetailsNetworksSelecteditems[] | cdktf.IResolvable) {
    this._selecteditems.internalValue = value;
  }
  public resetSelecteditems() {
    this._selecteditems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selecteditemsInput() {
    return this._selecteditems.internalValue;
  }
}

export class PolicyDetailsNetworksList extends cdktf.ComplexList {
  public internalValue? : PolicyDetailsNetworks[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsNetworksOutputReference {
    return new PolicyDetailsNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetails {
  /**
  * policy action, e.g: allow, deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#actions Policy#actions}
  */
  readonly actions: string;
  /**
  * set this to true to trigger the alert as per policy config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#alert Policy#alert}
  */
  readonly alert?: boolean | cdktf.IResolvable;
  /**
  * set this to true to bypass policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#bypass Policy#bypass}
  */
  readonly bypass?: boolean | cdktf.IResolvable;
  /**
  * set it to true to enable internet access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#internet_traffic_enabled Policy#internet_traffic_enabled}
  */
  readonly internetTrafficEnabled?: boolean | cdktf.IResolvable;
  /**
  * set this to true to lock the user defined in policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#lock_users Policy#lock_users}
  */
  readonly lockUsers?: boolean | cdktf.IResolvable;
  /**
  * set this to true to trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#mfa Policy#mfa}
  */
  readonly mfa?: boolean | cdktf.IResolvable;
  /**
  * set this to true to skip waf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#skipwaf Policy#skipwaf}
  */
  readonly skipwaf?: boolean | cdktf.IResolvable;
  /**
  * apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#apps Policy#apps}
  */
  readonly apps?: PolicyDetailsApps[] | cdktf.IResolvable;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#matches Policy#matches}
  */
  readonly matches: PolicyDetailsMatches[] | cdktf.IResolvable;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#networks Policy#networks}
  */
  readonly networks?: PolicyDetailsNetworks[] | cdktf.IResolvable;
}

export function policyDetailsToTerraform(struct?: PolicyDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.stringToTerraform(struct!.actions),
    alert: cdktf.booleanToTerraform(struct!.alert),
    bypass: cdktf.booleanToTerraform(struct!.bypass),
    internet_traffic_enabled: cdktf.booleanToTerraform(struct!.internetTrafficEnabled),
    lock_users: cdktf.booleanToTerraform(struct!.lockUsers),
    mfa: cdktf.booleanToTerraform(struct!.mfa),
    skipwaf: cdktf.booleanToTerraform(struct!.skipwaf),
    apps: cdktf.listMapper(policyDetailsAppsToTerraform, true)(struct!.apps),
    matches: cdktf.listMapper(policyDetailsMatchesToTerraform, true)(struct!.matches),
    networks: cdktf.listMapper(policyDetailsNetworksToTerraform, true)(struct!.networks),
  }
}


export function policyDetailsToHclTerraform(struct?: PolicyDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.stringToHclTerraform(struct!.actions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert: {
      value: cdktf.booleanToHclTerraform(struct!.alert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass: {
      value: cdktf.booleanToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internet_traffic_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.internetTrafficEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lock_users: {
      value: cdktf.booleanToHclTerraform(struct!.lockUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mfa: {
      value: cdktf.booleanToHclTerraform(struct!.mfa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skipwaf: {
      value: cdktf.booleanToHclTerraform(struct!.skipwaf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps: {
      value: cdktf.listMapperHcl(policyDetailsAppsToHclTerraform, true)(struct!.apps),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsAppsList",
    },
    matches: {
      value: cdktf.listMapperHcl(policyDetailsMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsMatchesList",
    },
    networks: {
      value: cdktf.listMapperHcl(policyDetailsNetworksToHclTerraform, true)(struct!.networks),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyDetailsNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._internetTrafficEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetTrafficEnabled = this._internetTrafficEnabled;
    }
    if (this._lockUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockUsers = this._lockUsers;
    }
    if (this._mfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa;
    }
    if (this._skipwaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipwaf = this._skipwaf;
    }
    if (this._apps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._alert = undefined;
      this._bypass = undefined;
      this._internetTrafficEnabled = undefined;
      this._lockUsers = undefined;
      this._mfa = undefined;
      this._skipwaf = undefined;
      this._apps.internalValue = undefined;
      this._matches.internalValue = undefined;
      this._networks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._alert = value.alert;
      this._bypass = value.bypass;
      this._internetTrafficEnabled = value.internetTrafficEnabled;
      this._lockUsers = value.lockUsers;
      this._mfa = value.mfa;
      this._skipwaf = value.skipwaf;
      this._apps.internalValue = value.apps;
      this._matches.internalValue = value.matches;
      this._networks.internalValue = value.networks;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string; 
  public get actions() {
    return this.getStringAttribute('actions');
  }
  public set actions(value: string) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: boolean | cdktf.IResolvable; 
  public get alert() {
    return this.getBooleanAttribute('alert');
  }
  public set alert(value: boolean | cdktf.IResolvable) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass?: boolean | cdktf.IResolvable; 
  public get bypass() {
    return this.getBooleanAttribute('bypass');
  }
  public set bypass(value: boolean | cdktf.IResolvable) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // internet_traffic_enabled - computed: false, optional: true, required: false
  private _internetTrafficEnabled?: boolean | cdktf.IResolvable; 
  public get internetTrafficEnabled() {
    return this.getBooleanAttribute('internet_traffic_enabled');
  }
  public set internetTrafficEnabled(value: boolean | cdktf.IResolvable) {
    this._internetTrafficEnabled = value;
  }
  public resetInternetTrafficEnabled() {
    this._internetTrafficEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetTrafficEnabledInput() {
    return this._internetTrafficEnabled;
  }

  // lock_users - computed: false, optional: true, required: false
  private _lockUsers?: boolean | cdktf.IResolvable; 
  public get lockUsers() {
    return this.getBooleanAttribute('lock_users');
  }
  public set lockUsers(value: boolean | cdktf.IResolvable) {
    this._lockUsers = value;
  }
  public resetLockUsers() {
    this._lockUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockUsersInput() {
    return this._lockUsers;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa?: boolean | cdktf.IResolvable; 
  public get mfa() {
    return this.getBooleanAttribute('mfa');
  }
  public set mfa(value: boolean | cdktf.IResolvable) {
    this._mfa = value;
  }
  public resetMfa() {
    this._mfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa;
  }

  // skipwaf - computed: false, optional: true, required: false
  private _skipwaf?: boolean | cdktf.IResolvable; 
  public get skipwaf() {
    return this.getBooleanAttribute('skipwaf');
  }
  public set skipwaf(value: boolean | cdktf.IResolvable) {
    this._skipwaf = value;
  }
  public resetSkipwaf() {
    this._skipwaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipwafInput() {
    return this._skipwaf;
  }

  // apps - computed: false, optional: true, required: false
  private _apps = new PolicyDetailsAppsList(this, "apps", true);
  public get apps() {
    return this._apps;
  }
  public putApps(value: PolicyDetailsApps[] | cdktf.IResolvable) {
    this._apps.internalValue = value;
  }
  public resetApps() {
    this._apps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps.internalValue;
  }

  // matches - computed: false, optional: false, required: true
  private _matches = new PolicyDetailsMatchesList(this, "matches", true);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: PolicyDetailsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new PolicyDetailsNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: PolicyDetailsNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }
}

export class PolicyDetailsList extends cdktf.ComplexList {
  public internalValue? : PolicyDetails[] | cdktf.IResolvable

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
  public get(index: number): PolicyDetailsOutputReference {
    return new PolicyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy prosimo_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/policy prosimo_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_policy',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appAccessType = config.appAccessType;
    this._devicePostureConfigured = config.devicePostureConfigured;
    this._name = config.name;
    this._namespace = config.namespace;
    this._teamid = config.teamid;
    this._types = config.types;
    this._details.internalValue = config.details;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_access_type - computed: false, optional: true, required: false
  private _appAccessType?: string; 
  public get appAccessType() {
    return this.getStringAttribute('app_access_type');
  }
  public set appAccessType(value: string) {
    this._appAccessType = value;
  }
  public resetAppAccessType() {
    this._appAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appAccessTypeInput() {
    return this._appAccessType;
  }

  // createdtime - computed: true, optional: false, required: false
  public get createdtime() {
    return this.getStringAttribute('createdtime');
  }

  // device_posture_configured - computed: false, optional: true, required: false
  private _devicePostureConfigured?: boolean | cdktf.IResolvable; 
  public get devicePostureConfigured() {
    return this.getBooleanAttribute('device_posture_configured');
  }
  public set devicePostureConfigured(value: boolean | cdktf.IResolvable) {
    this._devicePostureConfigured = value;
  }
  public resetDevicePostureConfigured() {
    this._devicePostureConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureConfiguredInput() {
    return this._devicePostureConfigured;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // teamid - computed: false, optional: true, required: false
  private _teamid?: string; 
  public get teamid() {
    return this.getStringAttribute('teamid');
  }
  public set teamid(value: string) {
    this._teamid = value;
  }
  public resetTeamid() {
    this._teamid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamidInput() {
    return this._teamid;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // updatedtime - computed: true, optional: false, required: false
  public get updatedtime() {
    return this.getStringAttribute('updatedtime');
  }

  // details - computed: false, optional: false, required: true
  private _details = new PolicyDetailsList(this, "details", true);
  public get details() {
    return this._details;
  }
  public putDetails(value: PolicyDetails[] | cdktf.IResolvable) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_access_type: cdktf.stringToTerraform(this._appAccessType),
      device_posture_configured: cdktf.booleanToTerraform(this._devicePostureConfigured),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      teamid: cdktf.stringToTerraform(this._teamid),
      types: cdktf.stringToTerraform(this._types),
      details: cdktf.listMapper(policyDetailsToTerraform, true)(this._details.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_access_type: {
        value: cdktf.stringToHclTerraform(this._appAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_posture_configured: {
        value: cdktf.booleanToHclTerraform(this._devicePostureConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      teamid: {
        value: cdktf.stringToHclTerraform(this._teamid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      types: {
        value: cdktf.stringToHclTerraform(this._types),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: cdktf.listMapperHcl(policyDetailsToHclTerraform, true)(this._details.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
