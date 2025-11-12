// https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/security_group_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackbillSecurityGroupListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/security_group_list#id DataStackbillSecurityGroupList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/security_group_list#uuid DataStackbillSecurityGroupList#uuid}
  */
  readonly uuid?: string;
}
export interface DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRule {
}

export function dataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRuleToTerraform(struct?: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRuleToHclTerraform(struct?: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_list - computed: true, optional: false, required: false
  public get cidrList() {
    return this.getStringAttribute('cidr_list');
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getStringAttribute('end_port');
  }

  // icmp_code - computed: true, optional: false, required: false
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }

  // icmp_type - computed: true, optional: false, required: false
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_group_uuid - computed: true, optional: false, required: false
  public get securityGroupUuid() {
    return this.getStringAttribute('security_group_uuid');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getStringAttribute('start_port');
  }
}

export class DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRuleOutputReference {
    return new DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRule {
}

export function dataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRuleToTerraform(struct?: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRuleToHclTerraform(struct?: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_list - computed: true, optional: false, required: false
  public get cidrList() {
    return this.getStringAttribute('cidr_list');
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getStringAttribute('end_port');
  }

  // icmp_code - computed: true, optional: false, required: false
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }

  // icmp_type - computed: true, optional: false, required: false
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_group_uuid - computed: true, optional: false, required: false
  public get securityGroupUuid() {
    return this.getStringAttribute('security_group_uuid');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getStringAttribute('start_port');
  }
}

export class DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRuleOutputReference {
    return new DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwarding {
}

export function dataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwardingToTerraform(struct?: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwardingToHclTerraform(struct?: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwardingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwarding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwarding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // private_end_port - computed: true, optional: false, required: false
  public get privateEndPort() {
    return this.getStringAttribute('private_end_port');
  }

  // private_start_port - computed: true, optional: false, required: false
  public get privateStartPort() {
    return this.getStringAttribute('private_start_port');
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // public_end_port - computed: true, optional: false, required: false
  public get publicEndPort() {
    return this.getStringAttribute('public_end_port');
  }

  // public_start_port - computed: true, optional: false, required: false
  public get publicStartPort() {
    return this.getStringAttribute('public_start_port');
  }

  // security_group_uuuid - computed: true, optional: false, required: false
  public get securityGroupUuuid() {
    return this.getStringAttribute('security_group_uuuid');
  }
}

export class DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwardingList extends cdktf.ComplexList {

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
  public get(index: number): DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwardingOutputReference {
    return new DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwardingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackbillSecurityGroupListSecuritygroups {
}

export function dataStackbillSecurityGroupListSecuritygroupsToTerraform(struct?: DataStackbillSecurityGroupListSecuritygroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackbillSecurityGroupListSecuritygroupsToHclTerraform(struct?: DataStackbillSecurityGroupListSecuritygroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackbillSecurityGroupListSecuritygroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackbillSecurityGroupListSecuritygroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackbillSecurityGroupListSecuritygroups | undefined) {
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

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // security_group_egress_rule - computed: true, optional: false, required: false
  private _securityGroupEgressRule = new DataStackbillSecurityGroupListSecuritygroupsSecurityGroupEgressRuleList(this, "security_group_egress_rule", false);
  public get securityGroupEgressRule() {
    return this._securityGroupEgressRule;
  }

  // security_group_firewall_rule - computed: true, optional: false, required: false
  private _securityGroupFirewallRule = new DataStackbillSecurityGroupListSecuritygroupsSecurityGroupFirewallRuleList(this, "security_group_firewall_rule", false);
  public get securityGroupFirewallRule() {
    return this._securityGroupFirewallRule;
  }

  // security_group_port_forwarding - computed: true, optional: false, required: false
  private _securityGroupPortForwarding = new DataStackbillSecurityGroupListSecuritygroupsSecurityGroupPortForwardingList(this, "security_group_port_forwarding", false);
  public get securityGroupPortForwarding() {
    return this._securityGroupPortForwarding;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataStackbillSecurityGroupListSecuritygroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataStackbillSecurityGroupListSecuritygroupsOutputReference {
    return new DataStackbillSecurityGroupListSecuritygroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/security_group_list stackbill_security_group_list}
*/
export class DataStackbillSecurityGroupList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackbill_security_group_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackbillSecurityGroupList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackbillSecurityGroupList to import
  * @param importFromId The id of the existing DataStackbillSecurityGroupList that should be imported. Refer to the {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/security_group_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackbillSecurityGroupList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackbill_security_group_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/security_group_list stackbill_security_group_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackbillSecurityGroupListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataStackbillSecurityGroupListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'stackbill_security_group_list',
      terraformGeneratorMetadata: {
        providerName: 'stackbill',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // securitygroups - computed: true, optional: false, required: false
  private _securitygroups = new DataStackbillSecurityGroupListSecuritygroupsList(this, "securitygroups", false);
  public get securitygroups() {
    return this._securitygroups;
  }

  // uuid - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
