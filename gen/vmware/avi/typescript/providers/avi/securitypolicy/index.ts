// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritypolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#description Securitypolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#dns_policy_index Securitypolicy#dns_policy_index}
  */
  readonly dnsPolicyIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#id Securitypolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#name Securitypolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#network_security_policy_index Securitypolicy#network_security_policy_index}
  */
  readonly networkSecurityPolicyIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#oper_mode Securitypolicy#oper_mode}
  */
  readonly operMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#tenant_ref Securitypolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#uuid Securitypolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#configpb_attributes Securitypolicy#configpb_attributes}
  */
  readonly configpbAttributes?: SecuritypolicyConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * dns_amplification_denyports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#dns_amplification_denyports Securitypolicy#dns_amplification_denyports}
  */
  readonly dnsAmplificationDenyports?: SecuritypolicyDnsAmplificationDenyports[] | cdktf.IResolvable;
  /**
  * dns_attacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#dns_attacks Securitypolicy#dns_attacks}
  */
  readonly dnsAttacks?: SecuritypolicyDnsAttacks[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#markers Securitypolicy#markers}
  */
  readonly markers?: SecuritypolicyMarkers[] | cdktf.IResolvable;
  /**
  * tcp_attacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#tcp_attacks Securitypolicy#tcp_attacks}
  */
  readonly tcpAttacks?: SecuritypolicyTcpAttacks[] | cdktf.IResolvable;
  /**
  * udp_attacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#udp_attacks Securitypolicy#udp_attacks}
  */
  readonly udpAttacks?: SecuritypolicyUdpAttacks[] | cdktf.IResolvable;
}
export interface SecuritypolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#version Securitypolicy#version}
  */
  readonly version?: string;
}

export function securitypolicyConfigpbAttributesToTerraform(struct?: SecuritypolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function securitypolicyConfigpbAttributesToHclTerraform(struct?: SecuritypolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritypolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class SecuritypolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyConfigpbAttributesOutputReference {
    return new SecuritypolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritypolicyDnsAmplificationDenyportsRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#end Securitypolicy#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#start Securitypolicy#start}
  */
  readonly start: string;
}

export function securitypolicyDnsAmplificationDenyportsRangesToTerraform(struct?: SecuritypolicyDnsAmplificationDenyportsRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function securitypolicyDnsAmplificationDenyportsRangesToHclTerraform(struct?: SecuritypolicyDnsAmplificationDenyportsRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritypolicyDnsAmplificationDenyportsRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyDnsAmplificationDenyportsRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyDnsAmplificationDenyportsRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class SecuritypolicyDnsAmplificationDenyportsRangesList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyDnsAmplificationDenyportsRanges[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyDnsAmplificationDenyportsRangesOutputReference {
    return new SecuritypolicyDnsAmplificationDenyportsRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritypolicyDnsAmplificationDenyports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#match_criteria Securitypolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#ports Securitypolicy#ports}
  */
  readonly ports?: number[];
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#ranges Securitypolicy#ranges}
  */
  readonly ranges?: SecuritypolicyDnsAmplificationDenyportsRanges[] | cdktf.IResolvable;
}

export function securitypolicyDnsAmplificationDenyportsToTerraform(struct?: SecuritypolicyDnsAmplificationDenyports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    ranges: cdktf.listMapper(securitypolicyDnsAmplificationDenyportsRangesToTerraform, true)(struct!.ranges),
  }
}


export function securitypolicyDnsAmplificationDenyportsToHclTerraform(struct?: SecuritypolicyDnsAmplificationDenyports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ranges: {
      value: cdktf.listMapperHcl(securitypolicyDnsAmplificationDenyportsRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritypolicyDnsAmplificationDenyportsRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritypolicyDnsAmplificationDenyportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyDnsAmplificationDenyports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyDnsAmplificationDenyports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._ports = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._ports = value.ports;
      this._ranges.internalValue = value.ranges;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SecuritypolicyDnsAmplificationDenyportsRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SecuritypolicyDnsAmplificationDenyportsRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class SecuritypolicyDnsAmplificationDenyportsList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyDnsAmplificationDenyports[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyDnsAmplificationDenyportsOutputReference {
    return new SecuritypolicyDnsAmplificationDenyportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritypolicyDnsAttacksAttacksMitigationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#deny Securitypolicy#deny}
  */
  readonly deny?: string;
}

export function securitypolicyDnsAttacksAttacksMitigationActionToTerraform(struct?: SecuritypolicyDnsAttacksAttacksMitigationAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.stringToTerraform(struct!.deny),
  }
}


export function securitypolicyDnsAttacksAttacksMitigationActionToHclTerraform(struct?: SecuritypolicyDnsAttacksAttacksMitigationAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.stringToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritypolicyDnsAttacksAttacksMitigationActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyDnsAttacksAttacksMitigationAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyDnsAttacksAttacksMitigationAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: string; 
  public get deny() {
    return this.getStringAttribute('deny');
  }
  public set deny(value: string) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}

export class SecuritypolicyDnsAttacksAttacksMitigationActionList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyDnsAttacksAttacksMitigationAction[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyDnsAttacksAttacksMitigationActionOutputReference {
    return new SecuritypolicyDnsAttacksAttacksMitigationActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritypolicyDnsAttacksAttacks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#attack_vector Securitypolicy#attack_vector}
  */
  readonly attackVector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#enabled Securitypolicy#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#max_mitigation_age Securitypolicy#max_mitigation_age}
  */
  readonly maxMitigationAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#threshold Securitypolicy#threshold}
  */
  readonly threshold?: string;
  /**
  * mitigation_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#mitigation_action Securitypolicy#mitigation_action}
  */
  readonly mitigationAction?: SecuritypolicyDnsAttacksAttacksMitigationAction[] | cdktf.IResolvable;
}

export function securitypolicyDnsAttacksAttacksToTerraform(struct?: SecuritypolicyDnsAttacksAttacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_vector: cdktf.stringToTerraform(struct!.attackVector),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    max_mitigation_age: cdktf.stringToTerraform(struct!.maxMitigationAge),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    mitigation_action: cdktf.listMapper(securitypolicyDnsAttacksAttacksMitigationActionToTerraform, true)(struct!.mitigationAction),
  }
}


export function securitypolicyDnsAttacksAttacksToHclTerraform(struct?: SecuritypolicyDnsAttacksAttacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_vector: {
      value: cdktf.stringToHclTerraform(struct!.attackVector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_mitigation_age: {
      value: cdktf.stringToHclTerraform(struct!.maxMitigationAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mitigation_action: {
      value: cdktf.listMapperHcl(securitypolicyDnsAttacksAttacksMitigationActionToHclTerraform, true)(struct!.mitigationAction),
      isBlock: true,
      type: "set",
      storageClassType: "SecuritypolicyDnsAttacksAttacksMitigationActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritypolicyDnsAttacksAttacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyDnsAttacksAttacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackVector !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackVector = this._attackVector;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxMitigationAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMitigationAge = this._maxMitigationAge;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._mitigationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationAction = this._mitigationAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyDnsAttacksAttacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attackVector = undefined;
      this._enabled = undefined;
      this._maxMitigationAge = undefined;
      this._threshold = undefined;
      this._mitigationAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attackVector = value.attackVector;
      this._enabled = value.enabled;
      this._maxMitigationAge = value.maxMitigationAge;
      this._threshold = value.threshold;
      this._mitigationAction.internalValue = value.mitigationAction;
    }
  }

  // attack_vector - computed: false, optional: false, required: true
  private _attackVector?: string; 
  public get attackVector() {
    return this.getStringAttribute('attack_vector');
  }
  public set attackVector(value: string) {
    this._attackVector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackVectorInput() {
    return this._attackVector;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_mitigation_age - computed: false, optional: true, required: false
  private _maxMitigationAge?: string; 
  public get maxMitigationAge() {
    return this.getStringAttribute('max_mitigation_age');
  }
  public set maxMitigationAge(value: string) {
    this._maxMitigationAge = value;
  }
  public resetMaxMitigationAge() {
    this._maxMitigationAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMitigationAgeInput() {
    return this._maxMitigationAge;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // mitigation_action - computed: false, optional: true, required: false
  private _mitigationAction = new SecuritypolicyDnsAttacksAttacksMitigationActionList(this, "mitigation_action", true);
  public get mitigationAction() {
    return this._mitigationAction;
  }
  public putMitigationAction(value: SecuritypolicyDnsAttacksAttacksMitigationAction[] | cdktf.IResolvable) {
    this._mitigationAction.internalValue = value;
  }
  public resetMitigationAction() {
    this._mitigationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationActionInput() {
    return this._mitigationAction.internalValue;
  }
}

export class SecuritypolicyDnsAttacksAttacksList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyDnsAttacksAttacks[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyDnsAttacksAttacksOutputReference {
    return new SecuritypolicyDnsAttacksAttacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritypolicyDnsAttacks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#oper_mode Securitypolicy#oper_mode}
  */
  readonly operMode?: string;
  /**
  * attacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#attacks Securitypolicy#attacks}
  */
  readonly attacks?: SecuritypolicyDnsAttacksAttacks[] | cdktf.IResolvable;
}

export function securitypolicyDnsAttacksToTerraform(struct?: SecuritypolicyDnsAttacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_mode: cdktf.stringToTerraform(struct!.operMode),
    attacks: cdktf.listMapper(securitypolicyDnsAttacksAttacksToTerraform, true)(struct!.attacks),
  }
}


export function securitypolicyDnsAttacksToHclTerraform(struct?: SecuritypolicyDnsAttacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_mode: {
      value: cdktf.stringToHclTerraform(struct!.operMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attacks: {
      value: cdktf.listMapperHcl(securitypolicyDnsAttacksAttacksToHclTerraform, true)(struct!.attacks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritypolicyDnsAttacksAttacksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritypolicyDnsAttacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyDnsAttacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operMode = this._operMode;
    }
    if (this._attacks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attacks = this._attacks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyDnsAttacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operMode = undefined;
      this._attacks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operMode = value.operMode;
      this._attacks.internalValue = value.attacks;
    }
  }

  // oper_mode - computed: true, optional: true, required: false
  private _operMode?: string; 
  public get operMode() {
    return this.getStringAttribute('oper_mode');
  }
  public set operMode(value: string) {
    this._operMode = value;
  }
  public resetOperMode() {
    this._operMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operModeInput() {
    return this._operMode;
  }

  // attacks - computed: false, optional: true, required: false
  private _attacks = new SecuritypolicyDnsAttacksAttacksList(this, "attacks", false);
  public get attacks() {
    return this._attacks;
  }
  public putAttacks(value: SecuritypolicyDnsAttacksAttacks[] | cdktf.IResolvable) {
    this._attacks.internalValue = value;
  }
  public resetAttacks() {
    this._attacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attacksInput() {
    return this._attacks.internalValue;
  }
}

export class SecuritypolicyDnsAttacksList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyDnsAttacks[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyDnsAttacksOutputReference {
    return new SecuritypolicyDnsAttacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritypolicyMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#key Securitypolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#values Securitypolicy#values}
  */
  readonly values?: string[];
}

export function securitypolicyMarkersToTerraform(struct?: SecuritypolicyMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function securitypolicyMarkersToHclTerraform(struct?: SecuritypolicyMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritypolicyMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SecuritypolicyMarkersList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyMarkers[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyMarkersOutputReference {
    return new SecuritypolicyMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritypolicyTcpAttacks {
}

export function securitypolicyTcpAttacksToTerraform(struct?: SecuritypolicyTcpAttacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securitypolicyTcpAttacksToHclTerraform(struct?: SecuritypolicyTcpAttacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuritypolicyTcpAttacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyTcpAttacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyTcpAttacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class SecuritypolicyTcpAttacksList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyTcpAttacks[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyTcpAttacksOutputReference {
    return new SecuritypolicyTcpAttacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritypolicyUdpAttacks {
}

export function securitypolicyUdpAttacksToTerraform(struct?: SecuritypolicyUdpAttacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securitypolicyUdpAttacksToHclTerraform(struct?: SecuritypolicyUdpAttacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuritypolicyUdpAttacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritypolicyUdpAttacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritypolicyUdpAttacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class SecuritypolicyUdpAttacksList extends cdktf.ComplexList {
  public internalValue? : SecuritypolicyUdpAttacks[] | cdktf.IResolvable

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
  public get(index: number): SecuritypolicyUdpAttacksOutputReference {
    return new SecuritypolicyUdpAttacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy avi_securitypolicy}
*/
export class Securitypolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_securitypolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Securitypolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Securitypolicy to import
  * @param importFromId The id of the existing Securitypolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Securitypolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_securitypolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/securitypolicy avi_securitypolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritypolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritypolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_securitypolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dnsPolicyIndex = config.dnsPolicyIndex;
    this._id = config.id;
    this._name = config.name;
    this._networkSecurityPolicyIndex = config.networkSecurityPolicyIndex;
    this._operMode = config.operMode;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._dnsAmplificationDenyports.internalValue = config.dnsAmplificationDenyports;
    this._dnsAttacks.internalValue = config.dnsAttacks;
    this._markers.internalValue = config.markers;
    this._tcpAttacks.internalValue = config.tcpAttacks;
    this._udpAttacks.internalValue = config.udpAttacks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // dns_policy_index - computed: false, optional: true, required: false
  private _dnsPolicyIndex?: string; 
  public get dnsPolicyIndex() {
    return this.getStringAttribute('dns_policy_index');
  }
  public set dnsPolicyIndex(value: string) {
    this._dnsPolicyIndex = value;
  }
  public resetDnsPolicyIndex() {
    this._dnsPolicyIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyIndexInput() {
    return this._dnsPolicyIndex;
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

  // network_security_policy_index - computed: false, optional: true, required: false
  private _networkSecurityPolicyIndex?: string; 
  public get networkSecurityPolicyIndex() {
    return this.getStringAttribute('network_security_policy_index');
  }
  public set networkSecurityPolicyIndex(value: string) {
    this._networkSecurityPolicyIndex = value;
  }
  public resetNetworkSecurityPolicyIndex() {
    this._networkSecurityPolicyIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityPolicyIndexInput() {
    return this._networkSecurityPolicyIndex;
  }

  // oper_mode - computed: false, optional: true, required: false
  private _operMode?: string; 
  public get operMode() {
    return this.getStringAttribute('oper_mode');
  }
  public set operMode(value: string) {
    this._operMode = value;
  }
  public resetOperMode() {
    this._operMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operModeInput() {
    return this._operMode;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new SecuritypolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: SecuritypolicyConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // dns_amplification_denyports - computed: false, optional: true, required: false
  private _dnsAmplificationDenyports = new SecuritypolicyDnsAmplificationDenyportsList(this, "dns_amplification_denyports", true);
  public get dnsAmplificationDenyports() {
    return this._dnsAmplificationDenyports;
  }
  public putDnsAmplificationDenyports(value: SecuritypolicyDnsAmplificationDenyports[] | cdktf.IResolvable) {
    this._dnsAmplificationDenyports.internalValue = value;
  }
  public resetDnsAmplificationDenyports() {
    this._dnsAmplificationDenyports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAmplificationDenyportsInput() {
    return this._dnsAmplificationDenyports.internalValue;
  }

  // dns_attacks - computed: false, optional: true, required: false
  private _dnsAttacks = new SecuritypolicyDnsAttacksList(this, "dns_attacks", true);
  public get dnsAttacks() {
    return this._dnsAttacks;
  }
  public putDnsAttacks(value: SecuritypolicyDnsAttacks[] | cdktf.IResolvable) {
    this._dnsAttacks.internalValue = value;
  }
  public resetDnsAttacks() {
    this._dnsAttacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAttacksInput() {
    return this._dnsAttacks.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new SecuritypolicyMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: SecuritypolicyMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // tcp_attacks - computed: false, optional: true, required: false
  private _tcpAttacks = new SecuritypolicyTcpAttacksList(this, "tcp_attacks", true);
  public get tcpAttacks() {
    return this._tcpAttacks;
  }
  public putTcpAttacks(value: SecuritypolicyTcpAttacks[] | cdktf.IResolvable) {
    this._tcpAttacks.internalValue = value;
  }
  public resetTcpAttacks() {
    this._tcpAttacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAttacksInput() {
    return this._tcpAttacks.internalValue;
  }

  // udp_attacks - computed: false, optional: true, required: false
  private _udpAttacks = new SecuritypolicyUdpAttacksList(this, "udp_attacks", true);
  public get udpAttacks() {
    return this._udpAttacks;
  }
  public putUdpAttacks(value: SecuritypolicyUdpAttacks[] | cdktf.IResolvable) {
    this._udpAttacks.internalValue = value;
  }
  public resetUdpAttacks() {
    this._udpAttacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAttacksInput() {
    return this._udpAttacks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dns_policy_index: cdktf.stringToTerraform(this._dnsPolicyIndex),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_security_policy_index: cdktf.stringToTerraform(this._networkSecurityPolicyIndex),
      oper_mode: cdktf.stringToTerraform(this._operMode),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(securitypolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      dns_amplification_denyports: cdktf.listMapper(securitypolicyDnsAmplificationDenyportsToTerraform, true)(this._dnsAmplificationDenyports.internalValue),
      dns_attacks: cdktf.listMapper(securitypolicyDnsAttacksToTerraform, true)(this._dnsAttacks.internalValue),
      markers: cdktf.listMapper(securitypolicyMarkersToTerraform, true)(this._markers.internalValue),
      tcp_attacks: cdktf.listMapper(securitypolicyTcpAttacksToTerraform, true)(this._tcpAttacks.internalValue),
      udp_attacks: cdktf.listMapper(securitypolicyUdpAttacksToTerraform, true)(this._udpAttacks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_policy_index: {
        value: cdktf.stringToHclTerraform(this._dnsPolicyIndex),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_security_policy_index: {
        value: cdktf.stringToHclTerraform(this._networkSecurityPolicyIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper_mode: {
        value: cdktf.stringToHclTerraform(this._operMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(securitypolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecuritypolicyConfigpbAttributesList",
      },
      dns_amplification_denyports: {
        value: cdktf.listMapperHcl(securitypolicyDnsAmplificationDenyportsToHclTerraform, true)(this._dnsAmplificationDenyports.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecuritypolicyDnsAmplificationDenyportsList",
      },
      dns_attacks: {
        value: cdktf.listMapperHcl(securitypolicyDnsAttacksToHclTerraform, true)(this._dnsAttacks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecuritypolicyDnsAttacksList",
      },
      markers: {
        value: cdktf.listMapperHcl(securitypolicyMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuritypolicyMarkersList",
      },
      tcp_attacks: {
        value: cdktf.listMapperHcl(securitypolicyTcpAttacksToHclTerraform, true)(this._tcpAttacks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecuritypolicyTcpAttacksList",
      },
      udp_attacks: {
        value: cdktf.listMapperHcl(securitypolicyUdpAttacksToHclTerraform, true)(this._udpAttacks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecuritypolicyUdpAttacksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
