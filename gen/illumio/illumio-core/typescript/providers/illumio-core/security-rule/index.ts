// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of Security Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#description SecurityRule#description}
  */
  readonly description?: string;
  /**
  * Enabled flag. Determines whether the rule will be enabled in ruleset or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#enabled SecurityRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * External data reference identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#external_data_reference SecurityRule#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * External data set identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#external_data_set SecurityRule#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#id SecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines whether machine authentication is enabled. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#machine_auth SecurityRule#machine_auth}
  */
  readonly machineAuth?: boolean | cdktf.IResolvable;
  /**
  * URI of Rule set, in which security rule will be added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#rule_set_href SecurityRule#rule_set_href}
  */
  readonly ruleSetHref: string;
  /**
  * Determines whether a secure connection is established. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#sec_connect SecurityRule#sec_connect}
  */
  readonly secConnect?: boolean | cdktf.IResolvable;
  /**
  * Determines whether packet filtering is stateless for the rule. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#stateless SecurityRule#stateless}
  */
  readonly stateless?: boolean | cdktf.IResolvable;
  /**
  * If false (the default), the created Rule will be an intra-scope rule. If true, it will be extra-scope. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#unscoped_consumers SecurityRule#unscoped_consumers}
  */
  readonly unscopedConsumers?: boolean | cdktf.IResolvable;
  /**
  * Whether to use workload subnets instead of IP addresses for providers/consumers. Allowed values are "providers" and/or "consumers"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#use_workload_subnets SecurityRule#use_workload_subnets}
  */
  readonly useWorkloadSubnets?: string[];
  /**
  * consumers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#consumers SecurityRule#consumers}
  */
  readonly consumers: SecurityRuleConsumers[] | cdktf.IResolvable;
  /**
  * ingress_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#ingress_services SecurityRule#ingress_services}
  */
  readonly ingressServices?: SecurityRuleIngressServices[] | cdktf.IResolvable;
  /**
  * providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#providers SecurityRule#providers}
  */
  readonly providers: SecurityRuleProviders[] | cdktf.IResolvable;
  /**
  * resolve_labels_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#resolve_labels_as SecurityRule#resolve_labels_as}
  */
  readonly resolveLabelsAs: SecurityRuleResolveLabelsAs;
}
export interface SecurityRuleConsumersIpListFqdns {
}

export function securityRuleConsumersIpListFqdnsToTerraform(struct?: SecurityRuleConsumersIpListFqdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityRuleConsumersIpListFqdnsToHclTerraform(struct?: SecurityRuleConsumersIpListFqdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityRuleConsumersIpListFqdnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleConsumersIpListFqdns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleConsumersIpListFqdns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class SecurityRuleConsumersIpListFqdnsList extends cdktf.ComplexList {

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
  public get(index: number): SecurityRuleConsumersIpListFqdnsOutputReference {
    return new SecurityRuleConsumersIpListFqdnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleConsumersIpListIpRanges {
}

export function securityRuleConsumersIpListIpRangesToTerraform(struct?: SecurityRuleConsumersIpListIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityRuleConsumersIpListIpRangesToHclTerraform(struct?: SecurityRuleConsumersIpListIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityRuleConsumersIpListIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleConsumersIpListIpRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleConsumersIpListIpRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclusion - computed: true, optional: false, required: false
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }

  // from_ip - computed: true, optional: false, required: false
  public get fromIp() {
    return this.getStringAttribute('from_ip');
  }

  // to_ip - computed: true, optional: false, required: false
  public get toIp() {
    return this.getStringAttribute('to_ip');
  }
}

export class SecurityRuleConsumersIpListIpRangesList extends cdktf.ComplexList {

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
  public get(index: number): SecurityRuleConsumersIpListIpRangesOutputReference {
    return new SecurityRuleConsumersIpListIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleConsumersIpListStruct {
  /**
  * URI of this IP List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleConsumersIpListStructToTerraform(struct?: SecurityRuleConsumersIpListStructOutputReference | SecurityRuleConsumersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleConsumersIpListStructToHclTerraform(struct?: SecurityRuleConsumersIpListStructOutputReference | SecurityRuleConsumersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleConsumersIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleConsumersIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleConsumersIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // fqdns - computed: true, optional: false, required: false
  private _fqdns = new SecurityRuleConsumersIpListFqdnsList(this, "fqdns", false);
  public get fqdns() {
    return this._fqdns;
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // ip_ranges - computed: true, optional: false, required: false
  private _ipRanges = new SecurityRuleConsumersIpListIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }
}
export interface SecurityRuleConsumersLabel {
  /**
  * Label URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleConsumersLabelToTerraform(struct?: SecurityRuleConsumersLabelOutputReference | SecurityRuleConsumersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleConsumersLabelToHclTerraform(struct?: SecurityRuleConsumersLabelOutputReference | SecurityRuleConsumersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleConsumersLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleConsumersLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleConsumersLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface SecurityRuleConsumersLabelGroup {
  /**
  * URI of Label Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleConsumersLabelGroupToTerraform(struct?: SecurityRuleConsumersLabelGroupOutputReference | SecurityRuleConsumersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleConsumersLabelGroupToHclTerraform(struct?: SecurityRuleConsumersLabelGroupOutputReference | SecurityRuleConsumersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleConsumersLabelGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleConsumersLabelGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleConsumersLabelGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface SecurityRuleConsumersVirtualService {
  /**
  * URI of Virtual Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleConsumersVirtualServiceToTerraform(struct?: SecurityRuleConsumersVirtualServiceOutputReference | SecurityRuleConsumersVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleConsumersVirtualServiceToHclTerraform(struct?: SecurityRuleConsumersVirtualServiceOutputReference | SecurityRuleConsumersVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleConsumersVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleConsumersVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleConsumersVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface SecurityRuleConsumersWorkload {
  /**
  * Workload URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleConsumersWorkloadToTerraform(struct?: SecurityRuleConsumersWorkloadOutputReference | SecurityRuleConsumersWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleConsumersWorkloadToHclTerraform(struct?: SecurityRuleConsumersWorkloadOutputReference | SecurityRuleConsumersWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleConsumersWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleConsumersWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleConsumersWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface SecurityRuleConsumers {
  /**
  * Consumer workloads filter. Allowed values are "ams" and "container_host"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#actors SecurityRule#actors}
  */
  readonly actors?: string;
  /**
  * Boolean to specify whether or not the actor is an exclusion - only for labels and label groups. Requires PCE v22.5+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#exclusion SecurityRule#exclusion}
  */
  readonly exclusion?: boolean | cdktf.IResolvable;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#ip_list SecurityRule#ip_list}
  */
  readonly ipList?: SecurityRuleConsumersIpListStruct;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#label SecurityRule#label}
  */
  readonly label?: SecurityRuleConsumersLabel;
  /**
  * label_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#label_group SecurityRule#label_group}
  */
  readonly labelGroup?: SecurityRuleConsumersLabelGroup;
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#virtual_service SecurityRule#virtual_service}
  */
  readonly virtualService?: SecurityRuleConsumersVirtualService;
  /**
  * workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#workload SecurityRule#workload}
  */
  readonly workload?: SecurityRuleConsumersWorkload;
}

export function securityRuleConsumersToTerraform(struct?: SecurityRuleConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actors: cdktf.stringToTerraform(struct!.actors),
    exclusion: cdktf.booleanToTerraform(struct!.exclusion),
    ip_list: securityRuleConsumersIpListStructToTerraform(struct!.ipList),
    label: securityRuleConsumersLabelToTerraform(struct!.label),
    label_group: securityRuleConsumersLabelGroupToTerraform(struct!.labelGroup),
    virtual_service: securityRuleConsumersVirtualServiceToTerraform(struct!.virtualService),
    workload: securityRuleConsumersWorkloadToTerraform(struct!.workload),
  }
}


export function securityRuleConsumersToHclTerraform(struct?: SecurityRuleConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actors: {
      value: cdktf.stringToHclTerraform(struct!.actors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion: {
      value: cdktf.booleanToHclTerraform(struct!.exclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_list: {
      value: securityRuleConsumersIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleConsumersIpListStructList",
    },
    label: {
      value: securityRuleConsumersLabelToHclTerraform(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleConsumersLabelList",
    },
    label_group: {
      value: securityRuleConsumersLabelGroupToHclTerraform(struct!.labelGroup),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleConsumersLabelGroupList",
    },
    virtual_service: {
      value: securityRuleConsumersVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleConsumersVirtualServiceList",
    },
    workload: {
      value: securityRuleConsumersWorkloadToHclTerraform(struct!.workload),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleConsumersWorkloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleConsumers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actors !== undefined) {
      hasAnyValues = true;
      internalValueResult.actors = this._actors;
    }
    if (this._exclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._labelGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelGroup = this._labelGroup?.internalValue;
    }
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    if (this._workload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleConsumers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actors = undefined;
      this._exclusion = undefined;
      this._ipList.internalValue = undefined;
      this._label.internalValue = undefined;
      this._labelGroup.internalValue = undefined;
      this._virtualService.internalValue = undefined;
      this._workload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actors = value.actors;
      this._exclusion = value.exclusion;
      this._ipList.internalValue = value.ipList;
      this._label.internalValue = value.label;
      this._labelGroup.internalValue = value.labelGroup;
      this._virtualService.internalValue = value.virtualService;
      this._workload.internalValue = value.workload;
    }
  }

  // actors - computed: false, optional: true, required: false
  private _actors?: string; 
  public get actors() {
    return this.getStringAttribute('actors');
  }
  public set actors(value: string) {
    this._actors = value;
  }
  public resetActors() {
    this._actors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorsInput() {
    return this._actors;
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion?: boolean | cdktf.IResolvable; 
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }
  public set exclusion(value: boolean | cdktf.IResolvable) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new SecurityRuleConsumersIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: SecurityRuleConsumersIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new SecurityRuleConsumersLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }
  public putLabel(value: SecurityRuleConsumersLabel) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // label_group - computed: false, optional: true, required: false
  private _labelGroup = new SecurityRuleConsumersLabelGroupOutputReference(this, "label_group");
  public get labelGroup() {
    return this._labelGroup;
  }
  public putLabelGroup(value: SecurityRuleConsumersLabelGroup) {
    this._labelGroup.internalValue = value;
  }
  public resetLabelGroup() {
    this._labelGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupInput() {
    return this._labelGroup.internalValue;
  }

  // virtual_service - computed: false, optional: true, required: false
  private _virtualService = new SecurityRuleConsumersVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: SecurityRuleConsumersVirtualService) {
    this._virtualService.internalValue = value;
  }
  public resetVirtualService() {
    this._virtualService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new SecurityRuleConsumersWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: SecurityRuleConsumersWorkload) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }
}

export class SecurityRuleConsumersList extends cdktf.ComplexList {
  public internalValue? : SecurityRuleConsumers[] | cdktf.IResolvable

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
  public get(index: number): SecurityRuleConsumersOutputReference {
    return new SecurityRuleConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleIngressServices {
  /**
  * URI of Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href?: string;
  /**
  * Port number used with protocol or starting port when specifying a range. Allowed range is 0-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#port SecurityRule#port}
  */
  readonly port?: string;
  /**
  * Protocol number. Allowed values are 6 (TCP) and 17 (UDP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#proto SecurityRule#proto}
  */
  readonly proto?: string;
  /**
  * Upper end of port range. Allowed range is 0-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#to_port SecurityRule#to_port}
  */
  readonly toPort?: string;
}

export function securityRuleIngressServicesToTerraform(struct?: SecurityRuleIngressServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    port: cdktf.stringToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function securityRuleIngressServicesToHclTerraform(struct?: SecurityRuleIngressServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.stringToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleIngressServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleIngressServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleIngressServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._port = value.port;
      this._proto = value.proto;
      this._toPort = value.toPort;
    }
  }

  // href - computed: false, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: string; 
  public get toPort() {
    return this.getStringAttribute('to_port');
  }
  public set toPort(value: string) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class SecurityRuleIngressServicesList extends cdktf.ComplexList {
  public internalValue? : SecurityRuleIngressServices[] | cdktf.IResolvable

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
  public get(index: number): SecurityRuleIngressServicesOutputReference {
    return new SecurityRuleIngressServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleProvidersIpListFqdns {
}

export function securityRuleProvidersIpListFqdnsToTerraform(struct?: SecurityRuleProvidersIpListFqdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityRuleProvidersIpListFqdnsToHclTerraform(struct?: SecurityRuleProvidersIpListFqdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityRuleProvidersIpListFqdnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleProvidersIpListFqdns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProvidersIpListFqdns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class SecurityRuleProvidersIpListFqdnsList extends cdktf.ComplexList {

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
  public get(index: number): SecurityRuleProvidersIpListFqdnsOutputReference {
    return new SecurityRuleProvidersIpListFqdnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleProvidersIpListIpRanges {
}

export function securityRuleProvidersIpListIpRangesToTerraform(struct?: SecurityRuleProvidersIpListIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityRuleProvidersIpListIpRangesToHclTerraform(struct?: SecurityRuleProvidersIpListIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityRuleProvidersIpListIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleProvidersIpListIpRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProvidersIpListIpRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclusion - computed: true, optional: false, required: false
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }

  // from_ip - computed: true, optional: false, required: false
  public get fromIp() {
    return this.getStringAttribute('from_ip');
  }

  // to_ip - computed: true, optional: false, required: false
  public get toIp() {
    return this.getStringAttribute('to_ip');
  }
}

export class SecurityRuleProvidersIpListIpRangesList extends cdktf.ComplexList {

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
  public get(index: number): SecurityRuleProvidersIpListIpRangesOutputReference {
    return new SecurityRuleProvidersIpListIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleProvidersIpListStruct {
  /**
  * URI of this IP List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleProvidersIpListStructToTerraform(struct?: SecurityRuleProvidersIpListStructOutputReference | SecurityRuleProvidersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleProvidersIpListStructToHclTerraform(struct?: SecurityRuleProvidersIpListStructOutputReference | SecurityRuleProvidersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleProvidersIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleProvidersIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProvidersIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // fqdns - computed: true, optional: false, required: false
  private _fqdns = new SecurityRuleProvidersIpListFqdnsList(this, "fqdns", false);
  public get fqdns() {
    return this._fqdns;
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // ip_ranges - computed: true, optional: false, required: false
  private _ipRanges = new SecurityRuleProvidersIpListIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }
}
export interface SecurityRuleProvidersLabel {
  /**
  * Label URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleProvidersLabelToTerraform(struct?: SecurityRuleProvidersLabelOutputReference | SecurityRuleProvidersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleProvidersLabelToHclTerraform(struct?: SecurityRuleProvidersLabelOutputReference | SecurityRuleProvidersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleProvidersLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleProvidersLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProvidersLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface SecurityRuleProvidersLabelGroup {
  /**
  * URI of Label Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleProvidersLabelGroupToTerraform(struct?: SecurityRuleProvidersLabelGroupOutputReference | SecurityRuleProvidersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleProvidersLabelGroupToHclTerraform(struct?: SecurityRuleProvidersLabelGroupOutputReference | SecurityRuleProvidersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleProvidersLabelGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleProvidersLabelGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProvidersLabelGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface SecurityRuleProvidersVirtualServer {
  /**
  * URI of Virtual Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleProvidersVirtualServerToTerraform(struct?: SecurityRuleProvidersVirtualServerOutputReference | SecurityRuleProvidersVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleProvidersVirtualServerToHclTerraform(struct?: SecurityRuleProvidersVirtualServerOutputReference | SecurityRuleProvidersVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleProvidersVirtualServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleProvidersVirtualServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProvidersVirtualServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface SecurityRuleProvidersVirtualService {
  /**
  * Virtual Service URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleProvidersVirtualServiceToTerraform(struct?: SecurityRuleProvidersVirtualServiceOutputReference | SecurityRuleProvidersVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleProvidersVirtualServiceToHclTerraform(struct?: SecurityRuleProvidersVirtualServiceOutputReference | SecurityRuleProvidersVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleProvidersVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleProvidersVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProvidersVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface SecurityRuleProvidersWorkload {
  /**
  * Workload URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#href SecurityRule#href}
  */
  readonly href: string;
}

export function securityRuleProvidersWorkloadToTerraform(struct?: SecurityRuleProvidersWorkloadOutputReference | SecurityRuleProvidersWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function securityRuleProvidersWorkloadToHclTerraform(struct?: SecurityRuleProvidersWorkloadOutputReference | SecurityRuleProvidersWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleProvidersWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleProvidersWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProvidersWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface SecurityRuleProviders {
  /**
  * All workloads provider filter. If specified, must have value "ams"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#actors SecurityRule#actors}
  */
  readonly actors?: string;
  /**
  * Boolean to specify whether or not the actor is an exclusion - only for labels and label groups. Requires PCE v22.5+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#exclusion SecurityRule#exclusion}
  */
  readonly exclusion?: boolean | cdktf.IResolvable;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#ip_list SecurityRule#ip_list}
  */
  readonly ipList?: SecurityRuleProvidersIpListStruct;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#label SecurityRule#label}
  */
  readonly label?: SecurityRuleProvidersLabel;
  /**
  * label_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#label_group SecurityRule#label_group}
  */
  readonly labelGroup?: SecurityRuleProvidersLabelGroup;
  /**
  * virtual_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#virtual_server SecurityRule#virtual_server}
  */
  readonly virtualServer?: SecurityRuleProvidersVirtualServer;
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#virtual_service SecurityRule#virtual_service}
  */
  readonly virtualService?: SecurityRuleProvidersVirtualService;
  /**
  * workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#workload SecurityRule#workload}
  */
  readonly workload?: SecurityRuleProvidersWorkload;
}

export function securityRuleProvidersToTerraform(struct?: SecurityRuleProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actors: cdktf.stringToTerraform(struct!.actors),
    exclusion: cdktf.booleanToTerraform(struct!.exclusion),
    ip_list: securityRuleProvidersIpListStructToTerraform(struct!.ipList),
    label: securityRuleProvidersLabelToTerraform(struct!.label),
    label_group: securityRuleProvidersLabelGroupToTerraform(struct!.labelGroup),
    virtual_server: securityRuleProvidersVirtualServerToTerraform(struct!.virtualServer),
    virtual_service: securityRuleProvidersVirtualServiceToTerraform(struct!.virtualService),
    workload: securityRuleProvidersWorkloadToTerraform(struct!.workload),
  }
}


export function securityRuleProvidersToHclTerraform(struct?: SecurityRuleProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actors: {
      value: cdktf.stringToHclTerraform(struct!.actors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion: {
      value: cdktf.booleanToHclTerraform(struct!.exclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_list: {
      value: securityRuleProvidersIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleProvidersIpListStructList",
    },
    label: {
      value: securityRuleProvidersLabelToHclTerraform(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleProvidersLabelList",
    },
    label_group: {
      value: securityRuleProvidersLabelGroupToHclTerraform(struct!.labelGroup),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleProvidersLabelGroupList",
    },
    virtual_server: {
      value: securityRuleProvidersVirtualServerToHclTerraform(struct!.virtualServer),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleProvidersVirtualServerList",
    },
    virtual_service: {
      value: securityRuleProvidersVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleProvidersVirtualServiceList",
    },
    workload: {
      value: securityRuleProvidersWorkloadToHclTerraform(struct!.workload),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityRuleProvidersWorkloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actors !== undefined) {
      hasAnyValues = true;
      internalValueResult.actors = this._actors;
    }
    if (this._exclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._labelGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelGroup = this._labelGroup?.internalValue;
    }
    if (this._virtualServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer?.internalValue;
    }
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    if (this._workload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actors = undefined;
      this._exclusion = undefined;
      this._ipList.internalValue = undefined;
      this._label.internalValue = undefined;
      this._labelGroup.internalValue = undefined;
      this._virtualServer.internalValue = undefined;
      this._virtualService.internalValue = undefined;
      this._workload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actors = value.actors;
      this._exclusion = value.exclusion;
      this._ipList.internalValue = value.ipList;
      this._label.internalValue = value.label;
      this._labelGroup.internalValue = value.labelGroup;
      this._virtualServer.internalValue = value.virtualServer;
      this._virtualService.internalValue = value.virtualService;
      this._workload.internalValue = value.workload;
    }
  }

  // actors - computed: false, optional: true, required: false
  private _actors?: string; 
  public get actors() {
    return this.getStringAttribute('actors');
  }
  public set actors(value: string) {
    this._actors = value;
  }
  public resetActors() {
    this._actors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorsInput() {
    return this._actors;
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion?: boolean | cdktf.IResolvable; 
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }
  public set exclusion(value: boolean | cdktf.IResolvable) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new SecurityRuleProvidersIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: SecurityRuleProvidersIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new SecurityRuleProvidersLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }
  public putLabel(value: SecurityRuleProvidersLabel) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // label_group - computed: false, optional: true, required: false
  private _labelGroup = new SecurityRuleProvidersLabelGroupOutputReference(this, "label_group");
  public get labelGroup() {
    return this._labelGroup;
  }
  public putLabelGroup(value: SecurityRuleProvidersLabelGroup) {
    this._labelGroup.internalValue = value;
  }
  public resetLabelGroup() {
    this._labelGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupInput() {
    return this._labelGroup.internalValue;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer = new SecurityRuleProvidersVirtualServerOutputReference(this, "virtual_server");
  public get virtualServer() {
    return this._virtualServer;
  }
  public putVirtualServer(value: SecurityRuleProvidersVirtualServer) {
    this._virtualServer.internalValue = value;
  }
  public resetVirtualServer() {
    this._virtualServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer.internalValue;
  }

  // virtual_service - computed: false, optional: true, required: false
  private _virtualService = new SecurityRuleProvidersVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: SecurityRuleProvidersVirtualService) {
    this._virtualService.internalValue = value;
  }
  public resetVirtualService() {
    this._virtualService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new SecurityRuleProvidersWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: SecurityRuleProvidersWorkload) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }
}

export class SecurityRuleProvidersList extends cdktf.ComplexList {
  public internalValue? : SecurityRuleProviders[] | cdktf.IResolvable

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
  public get(index: number): SecurityRuleProvidersOutputReference {
    return new SecurityRuleProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleResolveLabelsAs {
  /**
  * consumers for resolve_labels_as. Allowed values are "workloads", "virtual_services"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#consumers SecurityRule#consumers}
  */
  readonly consumers: string[];
  /**
  * providers for resolve_labels_as. Allowed values are "workloads", "virtual_services"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#providers SecurityRule#providers}
  */
  readonly providers: string[];
}

export function securityRuleResolveLabelsAsToTerraform(struct?: SecurityRuleResolveLabelsAsOutputReference | SecurityRuleResolveLabelsAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumers),
    providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.providers),
  }
}


export function securityRuleResolveLabelsAsToHclTerraform(struct?: SecurityRuleResolveLabelsAsOutputReference | SecurityRuleResolveLabelsAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.providers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleResolveLabelsAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleResolveLabelsAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumers !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumers = this._consumers;
    }
    if (this._providers !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleResolveLabelsAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumers = undefined;
      this._providers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumers = value.consumers;
      this._providers = value.providers;
    }
  }

  // consumers - computed: false, optional: false, required: true
  private _consumers?: string[]; 
  public get consumers() {
    return cdktf.Fn.tolist(this.getListAttribute('consumers'));
  }
  public set consumers(value: string[]) {
    this._consumers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumersInput() {
    return this._consumers;
  }

  // providers - computed: false, optional: false, required: true
  private _providers?: string[]; 
  public get providers() {
    return cdktf.Fn.tolist(this.getListAttribute('providers'));
  }
  public set providers(value: string[]) {
    this._providers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule illumio-core_security_rule}
*/
export class SecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityRule to import
  * @param importFromId The id of the existing SecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/security_rule illumio-core_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
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
    this._enabled = config.enabled;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._machineAuth = config.machineAuth;
    this._ruleSetHref = config.ruleSetHref;
    this._secConnect = config.secConnect;
    this._stateless = config.stateless;
    this._unscopedConsumers = config.unscopedConsumers;
    this._useWorkloadSubnets = config.useWorkloadSubnets;
    this._consumers.internalValue = config.consumers;
    this._ingressServices.internalValue = config.ingressServices;
    this._providers.internalValue = config.providers;
    this._resolveLabelsAs.internalValue = config.resolveLabelsAs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // machine_auth - computed: false, optional: true, required: false
  private _machineAuth?: boolean | cdktf.IResolvable; 
  public get machineAuth() {
    return this.getBooleanAttribute('machine_auth');
  }
  public set machineAuth(value: boolean | cdktf.IResolvable) {
    this._machineAuth = value;
  }
  public resetMachineAuth() {
    this._machineAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineAuthInput() {
    return this._machineAuth;
  }

  // rule_set_href - computed: false, optional: false, required: true
  private _ruleSetHref?: string; 
  public get ruleSetHref() {
    return this.getStringAttribute('rule_set_href');
  }
  public set ruleSetHref(value: string) {
    this._ruleSetHref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetHrefInput() {
    return this._ruleSetHref;
  }

  // sec_connect - computed: false, optional: true, required: false
  private _secConnect?: boolean | cdktf.IResolvable; 
  public get secConnect() {
    return this.getBooleanAttribute('sec_connect');
  }
  public set secConnect(value: boolean | cdktf.IResolvable) {
    this._secConnect = value;
  }
  public resetSecConnect() {
    this._secConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secConnectInput() {
    return this._secConnect;
  }

  // stateless - computed: false, optional: true, required: false
  private _stateless?: boolean | cdktf.IResolvable; 
  public get stateless() {
    return this.getBooleanAttribute('stateless');
  }
  public set stateless(value: boolean | cdktf.IResolvable) {
    this._stateless = value;
  }
  public resetStateless() {
    this._stateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessInput() {
    return this._stateless;
  }

  // unscoped_consumers - computed: false, optional: true, required: false
  private _unscopedConsumers?: boolean | cdktf.IResolvable; 
  public get unscopedConsumers() {
    return this.getBooleanAttribute('unscoped_consumers');
  }
  public set unscopedConsumers(value: boolean | cdktf.IResolvable) {
    this._unscopedConsumers = value;
  }
  public resetUnscopedConsumers() {
    this._unscopedConsumers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unscopedConsumersInput() {
    return this._unscopedConsumers;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // use_workload_subnets - computed: false, optional: true, required: false
  private _useWorkloadSubnets?: string[]; 
  public get useWorkloadSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('use_workload_subnets'));
  }
  public set useWorkloadSubnets(value: string[]) {
    this._useWorkloadSubnets = value;
  }
  public resetUseWorkloadSubnets() {
    this._useWorkloadSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWorkloadSubnetsInput() {
    return this._useWorkloadSubnets;
  }

  // consumers - computed: false, optional: false, required: true
  private _consumers = new SecurityRuleConsumersList(this, "consumers", true);
  public get consumers() {
    return this._consumers;
  }
  public putConsumers(value: SecurityRuleConsumers[] | cdktf.IResolvable) {
    this._consumers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumersInput() {
    return this._consumers.internalValue;
  }

  // ingress_services - computed: false, optional: true, required: false
  private _ingressServices = new SecurityRuleIngressServicesList(this, "ingress_services", true);
  public get ingressServices() {
    return this._ingressServices;
  }
  public putIngressServices(value: SecurityRuleIngressServices[] | cdktf.IResolvable) {
    this._ingressServices.internalValue = value;
  }
  public resetIngressServices() {
    this._ingressServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressServicesInput() {
    return this._ingressServices.internalValue;
  }

  // providers - computed: false, optional: false, required: true
  private _providers = new SecurityRuleProvidersList(this, "providers", true);
  public get providers() {
    return this._providers;
  }
  public putProviders(value: SecurityRuleProviders[] | cdktf.IResolvable) {
    this._providers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }

  // resolve_labels_as - computed: false, optional: false, required: true
  private _resolveLabelsAs = new SecurityRuleResolveLabelsAsOutputReference(this, "resolve_labels_as");
  public get resolveLabelsAs() {
    return this._resolveLabelsAs;
  }
  public putResolveLabelsAs(value: SecurityRuleResolveLabelsAs) {
    this._resolveLabelsAs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveLabelsAsInput() {
    return this._resolveLabelsAs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      machine_auth: cdktf.booleanToTerraform(this._machineAuth),
      rule_set_href: cdktf.stringToTerraform(this._ruleSetHref),
      sec_connect: cdktf.booleanToTerraform(this._secConnect),
      stateless: cdktf.booleanToTerraform(this._stateless),
      unscoped_consumers: cdktf.booleanToTerraform(this._unscopedConsumers),
      use_workload_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._useWorkloadSubnets),
      consumers: cdktf.listMapper(securityRuleConsumersToTerraform, true)(this._consumers.internalValue),
      ingress_services: cdktf.listMapper(securityRuleIngressServicesToTerraform, true)(this._ingressServices.internalValue),
      providers: cdktf.listMapper(securityRuleProvidersToTerraform, true)(this._providers.internalValue),
      resolve_labels_as: securityRuleResolveLabelsAsToTerraform(this._resolveLabelsAs.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      machine_auth: {
        value: cdktf.booleanToHclTerraform(this._machineAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rule_set_href: {
        value: cdktf.stringToHclTerraform(this._ruleSetHref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sec_connect: {
        value: cdktf.booleanToHclTerraform(this._secConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stateless: {
        value: cdktf.booleanToHclTerraform(this._stateless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unscoped_consumers: {
        value: cdktf.booleanToHclTerraform(this._unscopedConsumers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_workload_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._useWorkloadSubnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      consumers: {
        value: cdktf.listMapperHcl(securityRuleConsumersToHclTerraform, true)(this._consumers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityRuleConsumersList",
      },
      ingress_services: {
        value: cdktf.listMapperHcl(securityRuleIngressServicesToHclTerraform, true)(this._ingressServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityRuleIngressServicesList",
      },
      providers: {
        value: cdktf.listMapperHcl(securityRuleProvidersToHclTerraform, true)(this._providers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityRuleProvidersList",
      },
      resolve_labels_as: {
        value: securityRuleResolveLabelsAsToHclTerraform(this._resolveLabelsAs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityRuleResolveLabelsAsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
