// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsLbPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#annotations DnsLbPool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#description DnsLbPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#disable DnsLbPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#id DnsLbPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#labels DnsLbPool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#load_balancing_mode DnsLbPool#load_balancing_mode}
  */
  readonly loadBalancingMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#name DnsLbPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#namespace DnsLbPool#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#ttl DnsLbPool#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#use_rrset_ttl DnsLbPool#use_rrset_ttl}
  */
  readonly useRrsetTtl?: boolean | cdktf.IResolvable;
  /**
  * a_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#a_pool DnsLbPool#a_pool}
  */
  readonly aPool?: DnsLbPoolAPool;
  /**
  * aaaa_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#aaaa_pool DnsLbPool#aaaa_pool}
  */
  readonly aaaaPool?: DnsLbPoolAaaaPool;
  /**
  * cname_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#cname_pool DnsLbPool#cname_pool}
  */
  readonly cnamePool?: DnsLbPoolCnamePool;
  /**
  * mx_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#mx_pool DnsLbPool#mx_pool}
  */
  readonly mxPool?: DnsLbPoolMxPool;
  /**
  * srv_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#srv_pool DnsLbPool#srv_pool}
  */
  readonly srvPool?: DnsLbPoolSrvPool;
}
export interface DnsLbPoolAPoolHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#name DnsLbPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#namespace DnsLbPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#tenant DnsLbPool#tenant}
  */
  readonly tenant?: string;
}

export function dnsLbPoolAPoolHealthCheckToTerraform(struct?: DnsLbPoolAPoolHealthCheckOutputReference | DnsLbPoolAPoolHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function dnsLbPoolAPoolHealthCheckToHclTerraform(struct?: DnsLbPoolAPoolHealthCheckOutputReference | DnsLbPoolAPoolHealthCheck): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolAPoolHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbPoolAPoolHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolAPoolHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface DnsLbPoolAPoolMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#disable DnsLbPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#ip_endpoint DnsLbPool#ip_endpoint}
  */
  readonly ipEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#name DnsLbPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#priority DnsLbPool#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#ratio DnsLbPool#ratio}
  */
  readonly ratio?: number;
}

export function dnsLbPoolAPoolMembersToTerraform(struct?: DnsLbPoolAPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    ip_endpoint: cdktf.stringToTerraform(struct!.ipEndpoint),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function dnsLbPoolAPoolMembersToHclTerraform(struct?: DnsLbPoolAPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.ipEndpoint),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolAPoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsLbPoolAPoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._ipEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEndpoint = this._ipEndpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolAPoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._ipEndpoint = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._ratio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._ipEndpoint = value.ipEndpoint;
      this._name = value.name;
      this._priority = value.priority;
      this._ratio = value.ratio;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // ip_endpoint - computed: false, optional: false, required: true
  private _ipEndpoint?: string; 
  public get ipEndpoint() {
    return this.getStringAttribute('ip_endpoint');
  }
  public set ipEndpoint(value: string) {
    this._ipEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndpointInput() {
    return this._ipEndpoint;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class DnsLbPoolAPoolMembersList extends cdktf.ComplexList {
  public internalValue? : DnsLbPoolAPoolMembers[] | cdktf.IResolvable

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
  public get(index: number): DnsLbPoolAPoolMembersOutputReference {
    return new DnsLbPoolAPoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsLbPoolAPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#disable_health_check DnsLbPool#disable_health_check}
  */
  readonly disableHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#max_answers DnsLbPool#max_answers}
  */
  readonly maxAnswers: number;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#health_check DnsLbPool#health_check}
  */
  readonly healthCheck?: DnsLbPoolAPoolHealthCheck;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#members DnsLbPool#members}
  */
  readonly members: DnsLbPoolAPoolMembers[] | cdktf.IResolvable;
}

export function dnsLbPoolAPoolToTerraform(struct?: DnsLbPoolAPoolOutputReference | DnsLbPoolAPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_health_check: cdktf.booleanToTerraform(struct!.disableHealthCheck),
    max_answers: cdktf.numberToTerraform(struct!.maxAnswers),
    health_check: dnsLbPoolAPoolHealthCheckToTerraform(struct!.healthCheck),
    members: cdktf.listMapper(dnsLbPoolAPoolMembersToTerraform, true)(struct!.members),
  }
}


export function dnsLbPoolAPoolToHclTerraform(struct?: DnsLbPoolAPoolOutputReference | DnsLbPoolAPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_health_check: {
      value: cdktf.booleanToHclTerraform(struct!.disableHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_answers: {
      value: cdktf.numberToHclTerraform(struct!.maxAnswers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check: {
      value: dnsLbPoolAPoolHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLbPoolAPoolHealthCheckList",
    },
    members: {
      value: cdktf.listMapperHcl(dnsLbPoolAPoolMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLbPoolAPoolMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolAPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbPoolAPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHealthCheck = this._disableHealthCheck;
    }
    if (this._maxAnswers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAnswers = this._maxAnswers;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolAPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableHealthCheck = undefined;
      this._maxAnswers = undefined;
      this._healthCheck.internalValue = undefined;
      this._members.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableHealthCheck = value.disableHealthCheck;
      this._maxAnswers = value.maxAnswers;
      this._healthCheck.internalValue = value.healthCheck;
      this._members.internalValue = value.members;
    }
  }

  // disable_health_check - computed: false, optional: true, required: false
  private _disableHealthCheck?: boolean | cdktf.IResolvable; 
  public get disableHealthCheck() {
    return this.getBooleanAttribute('disable_health_check');
  }
  public set disableHealthCheck(value: boolean | cdktf.IResolvable) {
    this._disableHealthCheck = value;
  }
  public resetDisableHealthCheck() {
    this._disableHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHealthCheckInput() {
    return this._disableHealthCheck;
  }

  // max_answers - computed: false, optional: false, required: true
  private _maxAnswers?: number; 
  public get maxAnswers() {
    return this.getNumberAttribute('max_answers');
  }
  public set maxAnswers(value: number) {
    this._maxAnswers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAnswersInput() {
    return this._maxAnswers;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DnsLbPoolAPoolHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DnsLbPoolAPoolHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // members - computed: false, optional: false, required: true
  private _members = new DnsLbPoolAPoolMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DnsLbPoolAPoolMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}
export interface DnsLbPoolAaaaPoolMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#disable DnsLbPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#ip_endpoint DnsLbPool#ip_endpoint}
  */
  readonly ipEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#name DnsLbPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#priority DnsLbPool#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#ratio DnsLbPool#ratio}
  */
  readonly ratio?: number;
}

export function dnsLbPoolAaaaPoolMembersToTerraform(struct?: DnsLbPoolAaaaPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    ip_endpoint: cdktf.stringToTerraform(struct!.ipEndpoint),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function dnsLbPoolAaaaPoolMembersToHclTerraform(struct?: DnsLbPoolAaaaPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.ipEndpoint),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolAaaaPoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsLbPoolAaaaPoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._ipEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEndpoint = this._ipEndpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolAaaaPoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._ipEndpoint = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._ratio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._ipEndpoint = value.ipEndpoint;
      this._name = value.name;
      this._priority = value.priority;
      this._ratio = value.ratio;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // ip_endpoint - computed: false, optional: false, required: true
  private _ipEndpoint?: string; 
  public get ipEndpoint() {
    return this.getStringAttribute('ip_endpoint');
  }
  public set ipEndpoint(value: string) {
    this._ipEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndpointInput() {
    return this._ipEndpoint;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class DnsLbPoolAaaaPoolMembersList extends cdktf.ComplexList {
  public internalValue? : DnsLbPoolAaaaPoolMembers[] | cdktf.IResolvable

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
  public get(index: number): DnsLbPoolAaaaPoolMembersOutputReference {
    return new DnsLbPoolAaaaPoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsLbPoolAaaaPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#max_answers DnsLbPool#max_answers}
  */
  readonly maxAnswers: number;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#members DnsLbPool#members}
  */
  readonly members: DnsLbPoolAaaaPoolMembers[] | cdktf.IResolvable;
}

export function dnsLbPoolAaaaPoolToTerraform(struct?: DnsLbPoolAaaaPoolOutputReference | DnsLbPoolAaaaPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_answers: cdktf.numberToTerraform(struct!.maxAnswers),
    members: cdktf.listMapper(dnsLbPoolAaaaPoolMembersToTerraform, true)(struct!.members),
  }
}


export function dnsLbPoolAaaaPoolToHclTerraform(struct?: DnsLbPoolAaaaPoolOutputReference | DnsLbPoolAaaaPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_answers: {
      value: cdktf.numberToHclTerraform(struct!.maxAnswers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    members: {
      value: cdktf.listMapperHcl(dnsLbPoolAaaaPoolMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLbPoolAaaaPoolMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolAaaaPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbPoolAaaaPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAnswers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAnswers = this._maxAnswers;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolAaaaPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAnswers = undefined;
      this._members.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAnswers = value.maxAnswers;
      this._members.internalValue = value.members;
    }
  }

  // max_answers - computed: false, optional: false, required: true
  private _maxAnswers?: number; 
  public get maxAnswers() {
    return this.getNumberAttribute('max_answers');
  }
  public set maxAnswers(value: number) {
    this._maxAnswers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAnswersInput() {
    return this._maxAnswers;
  }

  // members - computed: false, optional: false, required: true
  private _members = new DnsLbPoolAaaaPoolMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DnsLbPoolAaaaPoolMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}
export interface DnsLbPoolCnamePoolMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#domain DnsLbPool#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#final_translation DnsLbPool#final_translation}
  */
  readonly finalTranslation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#name DnsLbPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#ratio DnsLbPool#ratio}
  */
  readonly ratio?: number;
}

export function dnsLbPoolCnamePoolMembersToTerraform(struct?: DnsLbPoolCnamePoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    final_translation: cdktf.booleanToTerraform(struct!.finalTranslation),
    name: cdktf.stringToTerraform(struct!.name),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function dnsLbPoolCnamePoolMembersToHclTerraform(struct?: DnsLbPoolCnamePoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    final_translation: {
      value: cdktf.booleanToHclTerraform(struct!.finalTranslation),
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
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolCnamePoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsLbPoolCnamePoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._finalTranslation !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalTranslation = this._finalTranslation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolCnamePoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._finalTranslation = undefined;
      this._name = undefined;
      this._ratio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._finalTranslation = value.finalTranslation;
      this._name = value.name;
      this._ratio = value.ratio;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // final_translation - computed: false, optional: true, required: false
  private _finalTranslation?: boolean | cdktf.IResolvable; 
  public get finalTranslation() {
    return this.getBooleanAttribute('final_translation');
  }
  public set finalTranslation(value: boolean | cdktf.IResolvable) {
    this._finalTranslation = value;
  }
  public resetFinalTranslation() {
    this._finalTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalTranslationInput() {
    return this._finalTranslation;
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

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class DnsLbPoolCnamePoolMembersList extends cdktf.ComplexList {
  public internalValue? : DnsLbPoolCnamePoolMembers[] | cdktf.IResolvable

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
  public get(index: number): DnsLbPoolCnamePoolMembersOutputReference {
    return new DnsLbPoolCnamePoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsLbPoolCnamePool {
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#members DnsLbPool#members}
  */
  readonly members: DnsLbPoolCnamePoolMembers[] | cdktf.IResolvable;
}

export function dnsLbPoolCnamePoolToTerraform(struct?: DnsLbPoolCnamePoolOutputReference | DnsLbPoolCnamePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    members: cdktf.listMapper(dnsLbPoolCnamePoolMembersToTerraform, true)(struct!.members),
  }
}


export function dnsLbPoolCnamePoolToHclTerraform(struct?: DnsLbPoolCnamePoolOutputReference | DnsLbPoolCnamePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    members: {
      value: cdktf.listMapperHcl(dnsLbPoolCnamePoolMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLbPoolCnamePoolMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolCnamePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbPoolCnamePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolCnamePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._members.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._members.internalValue = value.members;
    }
  }

  // members - computed: false, optional: false, required: true
  private _members = new DnsLbPoolCnamePoolMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DnsLbPoolCnamePoolMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}
export interface DnsLbPoolMxPoolMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#domain DnsLbPool#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#name DnsLbPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#priority DnsLbPool#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#ratio DnsLbPool#ratio}
  */
  readonly ratio?: number;
}

export function dnsLbPoolMxPoolMembersToTerraform(struct?: DnsLbPoolMxPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function dnsLbPoolMxPoolMembersToHclTerraform(struct?: DnsLbPoolMxPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolMxPoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsLbPoolMxPoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolMxPoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._ratio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._priority = value.priority;
      this._ratio = value.ratio;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class DnsLbPoolMxPoolMembersList extends cdktf.ComplexList {
  public internalValue? : DnsLbPoolMxPoolMembers[] | cdktf.IResolvable

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
  public get(index: number): DnsLbPoolMxPoolMembersOutputReference {
    return new DnsLbPoolMxPoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsLbPoolMxPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#max_answers DnsLbPool#max_answers}
  */
  readonly maxAnswers: number;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#members DnsLbPool#members}
  */
  readonly members: DnsLbPoolMxPoolMembers[] | cdktf.IResolvable;
}

export function dnsLbPoolMxPoolToTerraform(struct?: DnsLbPoolMxPoolOutputReference | DnsLbPoolMxPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_answers: cdktf.numberToTerraform(struct!.maxAnswers),
    members: cdktf.listMapper(dnsLbPoolMxPoolMembersToTerraform, true)(struct!.members),
  }
}


export function dnsLbPoolMxPoolToHclTerraform(struct?: DnsLbPoolMxPoolOutputReference | DnsLbPoolMxPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_answers: {
      value: cdktf.numberToHclTerraform(struct!.maxAnswers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    members: {
      value: cdktf.listMapperHcl(dnsLbPoolMxPoolMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLbPoolMxPoolMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolMxPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbPoolMxPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAnswers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAnswers = this._maxAnswers;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolMxPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAnswers = undefined;
      this._members.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAnswers = value.maxAnswers;
      this._members.internalValue = value.members;
    }
  }

  // max_answers - computed: false, optional: false, required: true
  private _maxAnswers?: number; 
  public get maxAnswers() {
    return this.getNumberAttribute('max_answers');
  }
  public set maxAnswers(value: number) {
    this._maxAnswers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAnswersInput() {
    return this._maxAnswers;
  }

  // members - computed: false, optional: false, required: true
  private _members = new DnsLbPoolMxPoolMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DnsLbPoolMxPoolMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}
export interface DnsLbPoolSrvPoolMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#final_translation DnsLbPool#final_translation}
  */
  readonly finalTranslation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#name DnsLbPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#port DnsLbPool#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#priority DnsLbPool#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#ratio DnsLbPool#ratio}
  */
  readonly ratio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#target DnsLbPool#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#weight DnsLbPool#weight}
  */
  readonly weight: number;
}

export function dnsLbPoolSrvPoolMembersToTerraform(struct?: DnsLbPoolSrvPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    final_translation: cdktf.booleanToTerraform(struct!.finalTranslation),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    ratio: cdktf.numberToTerraform(struct!.ratio),
    target: cdktf.stringToTerraform(struct!.target),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dnsLbPoolSrvPoolMembersToHclTerraform(struct?: DnsLbPoolSrvPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    final_translation: {
      value: cdktf.booleanToHclTerraform(struct!.finalTranslation),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolSrvPoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsLbPoolSrvPoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._finalTranslation !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalTranslation = this._finalTranslation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolSrvPoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._finalTranslation = undefined;
      this._name = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._ratio = undefined;
      this._target = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._finalTranslation = value.finalTranslation;
      this._name = value.name;
      this._port = value.port;
      this._priority = value.priority;
      this._ratio = value.ratio;
      this._target = value.target;
      this._weight = value.weight;
    }
  }

  // final_translation - computed: false, optional: true, required: false
  private _finalTranslation?: boolean | cdktf.IResolvable; 
  public get finalTranslation() {
    return this.getBooleanAttribute('final_translation');
  }
  public set finalTranslation(value: boolean | cdktf.IResolvable) {
    this._finalTranslation = value;
  }
  public resetFinalTranslation() {
    this._finalTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalTranslationInput() {
    return this._finalTranslation;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DnsLbPoolSrvPoolMembersList extends cdktf.ComplexList {
  public internalValue? : DnsLbPoolSrvPoolMembers[] | cdktf.IResolvable

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
  public get(index: number): DnsLbPoolSrvPoolMembersOutputReference {
    return new DnsLbPoolSrvPoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsLbPoolSrvPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#max_answers DnsLbPool#max_answers}
  */
  readonly maxAnswers: number;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#members DnsLbPool#members}
  */
  readonly members: DnsLbPoolSrvPoolMembers[] | cdktf.IResolvable;
}

export function dnsLbPoolSrvPoolToTerraform(struct?: DnsLbPoolSrvPoolOutputReference | DnsLbPoolSrvPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_answers: cdktf.numberToTerraform(struct!.maxAnswers),
    members: cdktf.listMapper(dnsLbPoolSrvPoolMembersToTerraform, true)(struct!.members),
  }
}


export function dnsLbPoolSrvPoolToHclTerraform(struct?: DnsLbPoolSrvPoolOutputReference | DnsLbPoolSrvPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_answers: {
      value: cdktf.numberToHclTerraform(struct!.maxAnswers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    members: {
      value: cdktf.listMapperHcl(dnsLbPoolSrvPoolMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLbPoolSrvPoolMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbPoolSrvPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbPoolSrvPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAnswers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAnswers = this._maxAnswers;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbPoolSrvPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAnswers = undefined;
      this._members.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAnswers = value.maxAnswers;
      this._members.internalValue = value.members;
    }
  }

  // max_answers - computed: false, optional: false, required: true
  private _maxAnswers?: number; 
  public get maxAnswers() {
    return this.getNumberAttribute('max_answers');
  }
  public set maxAnswers(value: number) {
    this._maxAnswers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAnswersInput() {
    return this._maxAnswers;
  }

  // members - computed: false, optional: false, required: true
  private _members = new DnsLbPoolSrvPoolMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DnsLbPoolSrvPoolMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool volterra_dns_lb_pool}
*/
export class DnsLbPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_dns_lb_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsLbPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsLbPool to import
  * @param importFromId The id of the existing DnsLbPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsLbPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_dns_lb_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/dns_lb_pool volterra_dns_lb_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsLbPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DnsLbPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_dns_lb_pool',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._loadBalancingMode = config.loadBalancingMode;
    this._name = config.name;
    this._namespace = config.namespace;
    this._ttl = config.ttl;
    this._useRrsetTtl = config.useRrsetTtl;
    this._aPool.internalValue = config.aPool;
    this._aaaaPool.internalValue = config.aaaaPool;
    this._cnamePool.internalValue = config.cnamePool;
    this._mxPool.internalValue = config.mxPool;
    this._srvPool.internalValue = config.srvPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // load_balancing_mode - computed: false, optional: false, required: true
  private _loadBalancingMode?: string; 
  public get loadBalancingMode() {
    return this.getStringAttribute('load_balancing_mode');
  }
  public set loadBalancingMode(value: string) {
    this._loadBalancingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingModeInput() {
    return this._loadBalancingMode;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_rrset_ttl - computed: false, optional: true, required: false
  private _useRrsetTtl?: boolean | cdktf.IResolvable; 
  public get useRrsetTtl() {
    return this.getBooleanAttribute('use_rrset_ttl');
  }
  public set useRrsetTtl(value: boolean | cdktf.IResolvable) {
    this._useRrsetTtl = value;
  }
  public resetUseRrsetTtl() {
    this._useRrsetTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRrsetTtlInput() {
    return this._useRrsetTtl;
  }

  // a_pool - computed: false, optional: true, required: false
  private _aPool = new DnsLbPoolAPoolOutputReference(this, "a_pool");
  public get aPool() {
    return this._aPool;
  }
  public putAPool(value: DnsLbPoolAPool) {
    this._aPool.internalValue = value;
  }
  public resetAPool() {
    this._aPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPoolInput() {
    return this._aPool.internalValue;
  }

  // aaaa_pool - computed: false, optional: true, required: false
  private _aaaaPool = new DnsLbPoolAaaaPoolOutputReference(this, "aaaa_pool");
  public get aaaaPool() {
    return this._aaaaPool;
  }
  public putAaaaPool(value: DnsLbPoolAaaaPool) {
    this._aaaaPool.internalValue = value;
  }
  public resetAaaaPool() {
    this._aaaaPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaPoolInput() {
    return this._aaaaPool.internalValue;
  }

  // cname_pool - computed: false, optional: true, required: false
  private _cnamePool = new DnsLbPoolCnamePoolOutputReference(this, "cname_pool");
  public get cnamePool() {
    return this._cnamePool;
  }
  public putCnamePool(value: DnsLbPoolCnamePool) {
    this._cnamePool.internalValue = value;
  }
  public resetCnamePool() {
    this._cnamePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnamePoolInput() {
    return this._cnamePool.internalValue;
  }

  // mx_pool - computed: false, optional: true, required: false
  private _mxPool = new DnsLbPoolMxPoolOutputReference(this, "mx_pool");
  public get mxPool() {
    return this._mxPool;
  }
  public putMxPool(value: DnsLbPoolMxPool) {
    this._mxPool.internalValue = value;
  }
  public resetMxPool() {
    this._mxPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxPoolInput() {
    return this._mxPool.internalValue;
  }

  // srv_pool - computed: false, optional: true, required: false
  private _srvPool = new DnsLbPoolSrvPoolOutputReference(this, "srv_pool");
  public get srvPool() {
    return this._srvPool;
  }
  public putSrvPool(value: DnsLbPoolSrvPool) {
    this._srvPool.internalValue = value;
  }
  public resetSrvPool() {
    this._srvPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvPoolInput() {
    return this._srvPool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      load_balancing_mode: cdktf.stringToTerraform(this._loadBalancingMode),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_rrset_ttl: cdktf.booleanToTerraform(this._useRrsetTtl),
      a_pool: dnsLbPoolAPoolToTerraform(this._aPool.internalValue),
      aaaa_pool: dnsLbPoolAaaaPoolToTerraform(this._aaaaPool.internalValue),
      cname_pool: dnsLbPoolCnamePoolToTerraform(this._cnamePool.internalValue),
      mx_pool: dnsLbPoolMxPoolToTerraform(this._mxPool.internalValue),
      srv_pool: dnsLbPoolSrvPoolToTerraform(this._srvPool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      load_balancing_mode: {
        value: cdktf.stringToHclTerraform(this._loadBalancingMode),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_rrset_ttl: {
        value: cdktf.booleanToHclTerraform(this._useRrsetTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      a_pool: {
        value: dnsLbPoolAPoolToHclTerraform(this._aPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbPoolAPoolList",
      },
      aaaa_pool: {
        value: dnsLbPoolAaaaPoolToHclTerraform(this._aaaaPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbPoolAaaaPoolList",
      },
      cname_pool: {
        value: dnsLbPoolCnamePoolToHclTerraform(this._cnamePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbPoolCnamePoolList",
      },
      mx_pool: {
        value: dnsLbPoolMxPoolToHclTerraform(this._mxPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbPoolMxPoolList",
      },
      srv_pool: {
        value: dnsLbPoolSrvPoolToHclTerraform(this._srvPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbPoolSrvPoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
