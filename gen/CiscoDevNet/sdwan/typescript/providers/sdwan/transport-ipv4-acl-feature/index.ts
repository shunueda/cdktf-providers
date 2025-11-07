// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportIpv4AclFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default Action
  *   - Choices: `drop`, `accept`
  *   - Default value: `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#default_action TransportIpv4AclFeature#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#description TransportIpv4AclFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#feature_profile_id TransportIpv4AclFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#name TransportIpv4AclFeature#name}
  */
  readonly name: string;
  /**
  * Access Control List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#sequences TransportIpv4AclFeature#sequences}
  */
  readonly sequences?: TransportIpv4AclFeatureSequences[] | cdktf.IResolvable;
}
export interface TransportIpv4AclFeatureSequencesActions {
  /**
  * Counter Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#accept_counter_name TransportIpv4AclFeature#accept_counter_name}
  */
  readonly acceptCounterName?: string;
  /**
  * Enable Log
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#accept_log TransportIpv4AclFeature#accept_log}
  */
  readonly acceptLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#accept_mirror_list_id TransportIpv4AclFeature#accept_mirror_list_id}
  */
  readonly acceptMirrorListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#accept_policer_id TransportIpv4AclFeature#accept_policer_id}
  */
  readonly acceptPolicerId?: string;
  /**
  * DSCP number
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#accept_set_dscp TransportIpv4AclFeature#accept_set_dscp}
  */
  readonly acceptSetDscp?: number;
  /**
  * Set Next Hop (IPV4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#accept_set_next_hop TransportIpv4AclFeature#accept_set_next_hop}
  */
  readonly acceptSetNextHop?: string;
  /**
  * Counter Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#drop_counter_name TransportIpv4AclFeature#drop_counter_name}
  */
  readonly dropCounterName?: string;
  /**
  * Enable Log
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#drop_log TransportIpv4AclFeature#drop_log}
  */
  readonly dropLog?: boolean | cdktf.IResolvable;
}

export function transportIpv4AclFeatureSequencesActionsToTerraform(struct?: TransportIpv4AclFeatureSequencesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_counter_name: cdktf.stringToTerraform(struct!.acceptCounterName),
    accept_log: cdktf.booleanToTerraform(struct!.acceptLog),
    accept_mirror_list_id: cdktf.stringToTerraform(struct!.acceptMirrorListId),
    accept_policer_id: cdktf.stringToTerraform(struct!.acceptPolicerId),
    accept_set_dscp: cdktf.numberToTerraform(struct!.acceptSetDscp),
    accept_set_next_hop: cdktf.stringToTerraform(struct!.acceptSetNextHop),
    drop_counter_name: cdktf.stringToTerraform(struct!.dropCounterName),
    drop_log: cdktf.booleanToTerraform(struct!.dropLog),
  }
}


export function transportIpv4AclFeatureSequencesActionsToHclTerraform(struct?: TransportIpv4AclFeatureSequencesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_counter_name: {
      value: cdktf.stringToHclTerraform(struct!.acceptCounterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_log: {
      value: cdktf.booleanToHclTerraform(struct!.acceptLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_mirror_list_id: {
      value: cdktf.stringToHclTerraform(struct!.acceptMirrorListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_policer_id: {
      value: cdktf.stringToHclTerraform(struct!.acceptPolicerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_set_dscp: {
      value: cdktf.numberToHclTerraform(struct!.acceptSetDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accept_set_next_hop: {
      value: cdktf.stringToHclTerraform(struct!.acceptSetNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_counter_name: {
      value: cdktf.stringToHclTerraform(struct!.dropCounterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_log: {
      value: cdktf.booleanToHclTerraform(struct!.dropLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportIpv4AclFeatureSequencesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportIpv4AclFeatureSequencesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptCounterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptCounterName = this._acceptCounterName;
    }
    if (this._acceptLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLog = this._acceptLog;
    }
    if (this._acceptMirrorListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptMirrorListId = this._acceptMirrorListId;
    }
    if (this._acceptPolicerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptPolicerId = this._acceptPolicerId;
    }
    if (this._acceptSetDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSetDscp = this._acceptSetDscp;
    }
    if (this._acceptSetNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSetNextHop = this._acceptSetNextHop;
    }
    if (this._dropCounterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCounterName = this._dropCounterName;
    }
    if (this._dropLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropLog = this._dropLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportIpv4AclFeatureSequencesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptCounterName = undefined;
      this._acceptLog = undefined;
      this._acceptMirrorListId = undefined;
      this._acceptPolicerId = undefined;
      this._acceptSetDscp = undefined;
      this._acceptSetNextHop = undefined;
      this._dropCounterName = undefined;
      this._dropLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptCounterName = value.acceptCounterName;
      this._acceptLog = value.acceptLog;
      this._acceptMirrorListId = value.acceptMirrorListId;
      this._acceptPolicerId = value.acceptPolicerId;
      this._acceptSetDscp = value.acceptSetDscp;
      this._acceptSetNextHop = value.acceptSetNextHop;
      this._dropCounterName = value.dropCounterName;
      this._dropLog = value.dropLog;
    }
  }

  // accept_counter_name - computed: false, optional: true, required: false
  private _acceptCounterName?: string; 
  public get acceptCounterName() {
    return this.getStringAttribute('accept_counter_name');
  }
  public set acceptCounterName(value: string) {
    this._acceptCounterName = value;
  }
  public resetAcceptCounterName() {
    this._acceptCounterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCounterNameInput() {
    return this._acceptCounterName;
  }

  // accept_log - computed: false, optional: true, required: false
  private _acceptLog?: boolean | cdktf.IResolvable; 
  public get acceptLog() {
    return this.getBooleanAttribute('accept_log');
  }
  public set acceptLog(value: boolean | cdktf.IResolvable) {
    this._acceptLog = value;
  }
  public resetAcceptLog() {
    this._acceptLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLogInput() {
    return this._acceptLog;
  }

  // accept_mirror_list_id - computed: false, optional: true, required: false
  private _acceptMirrorListId?: string; 
  public get acceptMirrorListId() {
    return this.getStringAttribute('accept_mirror_list_id');
  }
  public set acceptMirrorListId(value: string) {
    this._acceptMirrorListId = value;
  }
  public resetAcceptMirrorListId() {
    this._acceptMirrorListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptMirrorListIdInput() {
    return this._acceptMirrorListId;
  }

  // accept_policer_id - computed: false, optional: true, required: false
  private _acceptPolicerId?: string; 
  public get acceptPolicerId() {
    return this.getStringAttribute('accept_policer_id');
  }
  public set acceptPolicerId(value: string) {
    this._acceptPolicerId = value;
  }
  public resetAcceptPolicerId() {
    this._acceptPolicerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptPolicerIdInput() {
    return this._acceptPolicerId;
  }

  // accept_set_dscp - computed: false, optional: true, required: false
  private _acceptSetDscp?: number; 
  public get acceptSetDscp() {
    return this.getNumberAttribute('accept_set_dscp');
  }
  public set acceptSetDscp(value: number) {
    this._acceptSetDscp = value;
  }
  public resetAcceptSetDscp() {
    this._acceptSetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSetDscpInput() {
    return this._acceptSetDscp;
  }

  // accept_set_next_hop - computed: false, optional: true, required: false
  private _acceptSetNextHop?: string; 
  public get acceptSetNextHop() {
    return this.getStringAttribute('accept_set_next_hop');
  }
  public set acceptSetNextHop(value: string) {
    this._acceptSetNextHop = value;
  }
  public resetAcceptSetNextHop() {
    this._acceptSetNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSetNextHopInput() {
    return this._acceptSetNextHop;
  }

  // drop_counter_name - computed: false, optional: true, required: false
  private _dropCounterName?: string; 
  public get dropCounterName() {
    return this.getStringAttribute('drop_counter_name');
  }
  public set dropCounterName(value: string) {
    this._dropCounterName = value;
  }
  public resetDropCounterName() {
    this._dropCounterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCounterNameInput() {
    return this._dropCounterName;
  }

  // drop_log - computed: false, optional: true, required: false
  private _dropLog?: boolean | cdktf.IResolvable; 
  public get dropLog() {
    return this.getBooleanAttribute('drop_log');
  }
  public set dropLog(value: boolean | cdktf.IResolvable) {
    this._dropLog = value;
  }
  public resetDropLog() {
    this._dropLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLogInput() {
    return this._dropLog;
  }
}

export class TransportIpv4AclFeatureSequencesActionsList extends cdktf.ComplexList {
  public internalValue? : TransportIpv4AclFeatureSequencesActions[] | cdktf.IResolvable

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
  public get(index: number): TransportIpv4AclFeatureSequencesActionsOutputReference {
    return new TransportIpv4AclFeatureSequencesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts {
  /**
  * destination port range or individual port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#port TransportIpv4AclFeature#port}
  */
  readonly port?: string;
}

export function transportIpv4AclFeatureSequencesMatchEntriesDestinationPortsToTerraform(struct?: TransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function transportIpv4AclFeatureSequencesMatchEntriesDestinationPortsToHclTerraform(struct?: TransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
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
}

export class TransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsList extends cdktf.ComplexList {
  public internalValue? : TransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts[] | cdktf.IResolvable

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
  public get(index: number): TransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsOutputReference {
    return new TransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportIpv4AclFeatureSequencesMatchEntriesSourcePorts {
  /**
  * source port range or individual port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#port TransportIpv4AclFeature#port}
  */
  readonly port?: string;
}

export function transportIpv4AclFeatureSequencesMatchEntriesSourcePortsToTerraform(struct?: TransportIpv4AclFeatureSequencesMatchEntriesSourcePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function transportIpv4AclFeatureSequencesMatchEntriesSourcePortsToHclTerraform(struct?: TransportIpv4AclFeatureSequencesMatchEntriesSourcePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportIpv4AclFeatureSequencesMatchEntriesSourcePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportIpv4AclFeatureSequencesMatchEntriesSourcePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportIpv4AclFeatureSequencesMatchEntriesSourcePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
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
}

export class TransportIpv4AclFeatureSequencesMatchEntriesSourcePortsList extends cdktf.ComplexList {
  public internalValue? : TransportIpv4AclFeatureSequencesMatchEntriesSourcePorts[] | cdktf.IResolvable

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
  public get(index: number): TransportIpv4AclFeatureSequencesMatchEntriesSourcePortsOutputReference {
    return new TransportIpv4AclFeatureSequencesMatchEntriesSourcePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportIpv4AclFeatureSequencesMatchEntries {
  /**
  * Destination Data IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#destination_data_prefix TransportIpv4AclFeature#destination_data_prefix}
  */
  readonly destinationDataPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#destination_data_prefix_list_id TransportIpv4AclFeature#destination_data_prefix_list_id}
  */
  readonly destinationDataPrefixListId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#destination_data_prefix_variable TransportIpv4AclFeature#destination_data_prefix_variable}
  */
  readonly destinationDataPrefixVariable?: string;
  /**
  * Destination Port List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#destination_ports TransportIpv4AclFeature#destination_ports}
  */
  readonly destinationPorts?: TransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts[] | cdktf.IResolvable;
  /**
  * DSCP number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#dscps TransportIpv4AclFeature#dscps}
  */
  readonly dscps?: number[];
  /**
  * ICMP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#icmp_messages TransportIpv4AclFeature#icmp_messages}
  */
  readonly icmpMessages?: string[];
  /**
  * Packet Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#packet_length TransportIpv4AclFeature#packet_length}
  */
  readonly packetLength?: string;
  /**
  * protocol number list with at least one item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#protocols TransportIpv4AclFeature#protocols}
  */
  readonly protocols?: number[];
  /**
  * Source Data IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#source_data_prefix TransportIpv4AclFeature#source_data_prefix}
  */
  readonly sourceDataPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#source_data_prefix_list_id TransportIpv4AclFeature#source_data_prefix_list_id}
  */
  readonly sourceDataPrefixListId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#source_data_prefix_variable TransportIpv4AclFeature#source_data_prefix_variable}
  */
  readonly sourceDataPrefixVariable?: string;
  /**
  * Source Port List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#source_ports TransportIpv4AclFeature#source_ports}
  */
  readonly sourcePorts?: TransportIpv4AclFeatureSequencesMatchEntriesSourcePorts[] | cdktf.IResolvable;
  /**
  * TCP States
  *   - Choices: `syn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#tcp_state TransportIpv4AclFeature#tcp_state}
  */
  readonly tcpState?: string;
}

export function transportIpv4AclFeatureSequencesMatchEntriesToTerraform(struct?: TransportIpv4AclFeatureSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_data_prefix: cdktf.stringToTerraform(struct!.destinationDataPrefix),
    destination_data_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataPrefixListId),
    destination_data_prefix_variable: cdktf.stringToTerraform(struct!.destinationDataPrefixVariable),
    destination_ports: cdktf.listMapper(transportIpv4AclFeatureSequencesMatchEntriesDestinationPortsToTerraform, false)(struct!.destinationPorts),
    dscps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dscps),
    icmp_messages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.icmpMessages),
    packet_length: cdktf.stringToTerraform(struct!.packetLength),
    protocols: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protocols),
    source_data_prefix: cdktf.stringToTerraform(struct!.sourceDataPrefix),
    source_data_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataPrefixListId),
    source_data_prefix_variable: cdktf.stringToTerraform(struct!.sourceDataPrefixVariable),
    source_ports: cdktf.listMapper(transportIpv4AclFeatureSequencesMatchEntriesSourcePortsToTerraform, false)(struct!.sourcePorts),
    tcp_state: cdktf.stringToTerraform(struct!.tcpState),
  }
}


export function transportIpv4AclFeatureSequencesMatchEntriesToHclTerraform(struct?: TransportIpv4AclFeatureSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_data_prefix: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataPrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ports: {
      value: cdktf.listMapperHcl(transportIpv4AclFeatureSequencesMatchEntriesDestinationPortsToHclTerraform, false)(struct!.destinationPorts),
      isBlock: true,
      type: "list",
      storageClassType: "TransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsList",
    },
    dscps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dscps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    icmp_messages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.icmpMessages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    packet_length: {
      value: cdktf.stringToHclTerraform(struct!.packetLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    source_data_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataPrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.listMapperHcl(transportIpv4AclFeatureSequencesMatchEntriesSourcePortsToHclTerraform, false)(struct!.sourcePorts),
      isBlock: true,
      type: "list",
      storageClassType: "TransportIpv4AclFeatureSequencesMatchEntriesSourcePortsList",
    },
    tcp_state: {
      value: cdktf.stringToHclTerraform(struct!.tcpState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportIpv4AclFeatureSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportIpv4AclFeatureSequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDataPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataPrefix = this._destinationDataPrefix;
    }
    if (this._destinationDataPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataPrefixListId = this._destinationDataPrefixListId;
    }
    if (this._destinationDataPrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataPrefixVariable = this._destinationDataPrefixVariable;
    }
    if (this._destinationPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts?.internalValue;
    }
    if (this._dscps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscps = this._dscps;
    }
    if (this._icmpMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMessages = this._icmpMessages;
    }
    if (this._packetLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLength = this._packetLength;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceDataPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataPrefix = this._sourceDataPrefix;
    }
    if (this._sourceDataPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataPrefixListId = this._sourceDataPrefixListId;
    }
    if (this._sourceDataPrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataPrefixVariable = this._sourceDataPrefixVariable;
    }
    if (this._sourcePorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts?.internalValue;
    }
    if (this._tcpState !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpState = this._tcpState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportIpv4AclFeatureSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationDataPrefix = undefined;
      this._destinationDataPrefixListId = undefined;
      this._destinationDataPrefixVariable = undefined;
      this._destinationPorts.internalValue = undefined;
      this._dscps = undefined;
      this._icmpMessages = undefined;
      this._packetLength = undefined;
      this._protocols = undefined;
      this._sourceDataPrefix = undefined;
      this._sourceDataPrefixListId = undefined;
      this._sourceDataPrefixVariable = undefined;
      this._sourcePorts.internalValue = undefined;
      this._tcpState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationDataPrefix = value.destinationDataPrefix;
      this._destinationDataPrefixListId = value.destinationDataPrefixListId;
      this._destinationDataPrefixVariable = value.destinationDataPrefixVariable;
      this._destinationPorts.internalValue = value.destinationPorts;
      this._dscps = value.dscps;
      this._icmpMessages = value.icmpMessages;
      this._packetLength = value.packetLength;
      this._protocols = value.protocols;
      this._sourceDataPrefix = value.sourceDataPrefix;
      this._sourceDataPrefixListId = value.sourceDataPrefixListId;
      this._sourceDataPrefixVariable = value.sourceDataPrefixVariable;
      this._sourcePorts.internalValue = value.sourcePorts;
      this._tcpState = value.tcpState;
    }
  }

  // destination_data_prefix - computed: false, optional: true, required: false
  private _destinationDataPrefix?: string; 
  public get destinationDataPrefix() {
    return this.getStringAttribute('destination_data_prefix');
  }
  public set destinationDataPrefix(value: string) {
    this._destinationDataPrefix = value;
  }
  public resetDestinationDataPrefix() {
    this._destinationDataPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataPrefixInput() {
    return this._destinationDataPrefix;
  }

  // destination_data_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataPrefixListId?: string; 
  public get destinationDataPrefixListId() {
    return this.getStringAttribute('destination_data_prefix_list_id');
  }
  public set destinationDataPrefixListId(value: string) {
    this._destinationDataPrefixListId = value;
  }
  public resetDestinationDataPrefixListId() {
    this._destinationDataPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataPrefixListIdInput() {
    return this._destinationDataPrefixListId;
  }

  // destination_data_prefix_variable - computed: false, optional: true, required: false
  private _destinationDataPrefixVariable?: string; 
  public get destinationDataPrefixVariable() {
    return this.getStringAttribute('destination_data_prefix_variable');
  }
  public set destinationDataPrefixVariable(value: string) {
    this._destinationDataPrefixVariable = value;
  }
  public resetDestinationDataPrefixVariable() {
    this._destinationDataPrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataPrefixVariableInput() {
    return this._destinationDataPrefixVariable;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts = new TransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsList(this, "destination_ports", false);
  public get destinationPorts() {
    return this._destinationPorts;
  }
  public putDestinationPorts(value: TransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts[] | cdktf.IResolvable) {
    this._destinationPorts.internalValue = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts.internalValue;
  }

  // dscps - computed: false, optional: true, required: false
  private _dscps?: number[]; 
  public get dscps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dscps')));
  }
  public set dscps(value: number[]) {
    this._dscps = value;
  }
  public resetDscps() {
    this._dscps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpsInput() {
    return this._dscps;
  }

  // icmp_messages - computed: false, optional: true, required: false
  private _icmpMessages?: string[]; 
  public get icmpMessages() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_messages'));
  }
  public set icmpMessages(value: string[]) {
    this._icmpMessages = value;
  }
  public resetIcmpMessages() {
    this._icmpMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMessagesInput() {
    return this._icmpMessages;
  }

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: string; 
  public get packetLength() {
    return this.getStringAttribute('packet_length');
  }
  public set packetLength(value: string) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: number[]; 
  public get protocols() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protocols')));
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_data_prefix - computed: false, optional: true, required: false
  private _sourceDataPrefix?: string; 
  public get sourceDataPrefix() {
    return this.getStringAttribute('source_data_prefix');
  }
  public set sourceDataPrefix(value: string) {
    this._sourceDataPrefix = value;
  }
  public resetSourceDataPrefix() {
    this._sourceDataPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataPrefixInput() {
    return this._sourceDataPrefix;
  }

  // source_data_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataPrefixListId?: string; 
  public get sourceDataPrefixListId() {
    return this.getStringAttribute('source_data_prefix_list_id');
  }
  public set sourceDataPrefixListId(value: string) {
    this._sourceDataPrefixListId = value;
  }
  public resetSourceDataPrefixListId() {
    this._sourceDataPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataPrefixListIdInput() {
    return this._sourceDataPrefixListId;
  }

  // source_data_prefix_variable - computed: false, optional: true, required: false
  private _sourceDataPrefixVariable?: string; 
  public get sourceDataPrefixVariable() {
    return this.getStringAttribute('source_data_prefix_variable');
  }
  public set sourceDataPrefixVariable(value: string) {
    this._sourceDataPrefixVariable = value;
  }
  public resetSourceDataPrefixVariable() {
    this._sourceDataPrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataPrefixVariableInput() {
    return this._sourceDataPrefixVariable;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts = new TransportIpv4AclFeatureSequencesMatchEntriesSourcePortsList(this, "source_ports", false);
  public get sourcePorts() {
    return this._sourcePorts;
  }
  public putSourcePorts(value: TransportIpv4AclFeatureSequencesMatchEntriesSourcePorts[] | cdktf.IResolvable) {
    this._sourcePorts.internalValue = value;
  }
  public resetSourcePorts() {
    this._sourcePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts.internalValue;
  }

  // tcp_state - computed: false, optional: true, required: false
  private _tcpState?: string; 
  public get tcpState() {
    return this.getStringAttribute('tcp_state');
  }
  public set tcpState(value: string) {
    this._tcpState = value;
  }
  public resetTcpState() {
    this._tcpState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpStateInput() {
    return this._tcpState;
  }
}

export class TransportIpv4AclFeatureSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : TransportIpv4AclFeatureSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): TransportIpv4AclFeatureSequencesMatchEntriesOutputReference {
    return new TransportIpv4AclFeatureSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportIpv4AclFeatureSequences {
  /**
  * Define list of actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#actions TransportIpv4AclFeature#actions}
  */
  readonly actions?: TransportIpv4AclFeatureSequencesActions[] | cdktf.IResolvable;
  /**
  * Base Action
  *   - Choices: `drop`, `accept`
  *   - Default value: `accept`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#base_action TransportIpv4AclFeature#base_action}
  */
  readonly baseAction?: string;
  /**
  * Define match conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#match_entries TransportIpv4AclFeature#match_entries}
  */
  readonly matchEntries?: TransportIpv4AclFeatureSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence Id
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#sequence_id TransportIpv4AclFeature#sequence_id}
  */
  readonly sequenceId?: number;
  /**
  * Sequence Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#sequence_name TransportIpv4AclFeature#sequence_name}
  */
  readonly sequenceName?: string;
}

export function transportIpv4AclFeatureSequencesToTerraform(struct?: TransportIpv4AclFeatureSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(transportIpv4AclFeatureSequencesActionsToTerraform, false)(struct!.actions),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    match_entries: cdktf.listMapper(transportIpv4AclFeatureSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    sequence_id: cdktf.numberToTerraform(struct!.sequenceId),
    sequence_name: cdktf.stringToTerraform(struct!.sequenceName),
  }
}


export function transportIpv4AclFeatureSequencesToHclTerraform(struct?: TransportIpv4AclFeatureSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(transportIpv4AclFeatureSequencesActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "TransportIpv4AclFeatureSequencesActionsList",
    },
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_entries: {
      value: cdktf.listMapperHcl(transportIpv4AclFeatureSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "list",
      storageClassType: "TransportIpv4AclFeatureSequencesMatchEntriesList",
    },
    sequence_id: {
      value: cdktf.numberToHclTerraform(struct!.sequenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_name: {
      value: cdktf.stringToHclTerraform(struct!.sequenceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportIpv4AclFeatureSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportIpv4AclFeatureSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._sequenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceId = this._sequenceId;
    }
    if (this._sequenceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceName = this._sequenceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportIpv4AclFeatureSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._baseAction = undefined;
      this._matchEntries.internalValue = undefined;
      this._sequenceId = undefined;
      this._sequenceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._baseAction = value.baseAction;
      this._matchEntries.internalValue = value.matchEntries;
      this._sequenceId = value.sequenceId;
      this._sequenceName = value.sequenceName;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new TransportIpv4AclFeatureSequencesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: TransportIpv4AclFeatureSequencesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // base_action - computed: false, optional: true, required: false
  private _baseAction?: string; 
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }
  public set baseAction(value: string) {
    this._baseAction = value;
  }
  public resetBaseAction() {
    this._baseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseActionInput() {
    return this._baseAction;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new TransportIpv4AclFeatureSequencesMatchEntriesList(this, "match_entries", false);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: TransportIpv4AclFeatureSequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
  }

  // sequence_id - computed: false, optional: true, required: false
  private _sequenceId?: number; 
  public get sequenceId() {
    return this.getNumberAttribute('sequence_id');
  }
  public set sequenceId(value: number) {
    this._sequenceId = value;
  }
  public resetSequenceId() {
    this._sequenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceIdInput() {
    return this._sequenceId;
  }

  // sequence_name - computed: false, optional: true, required: false
  private _sequenceName?: string; 
  public get sequenceName() {
    return this.getStringAttribute('sequence_name');
  }
  public set sequenceName(value: string) {
    this._sequenceName = value;
  }
  public resetSequenceName() {
    this._sequenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNameInput() {
    return this._sequenceName;
  }
}

export class TransportIpv4AclFeatureSequencesList extends cdktf.ComplexList {
  public internalValue? : TransportIpv4AclFeatureSequences[] | cdktf.IResolvable

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
  public get(index: number): TransportIpv4AclFeatureSequencesOutputReference {
    return new TransportIpv4AclFeatureSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature sdwan_transport_ipv4_acl_feature}
*/
export class TransportIpv4AclFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_ipv4_acl_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportIpv4AclFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportIpv4AclFeature to import
  * @param importFromId The id of the existing TransportIpv4AclFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportIpv4AclFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_ipv4_acl_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv4_acl_feature sdwan_transport_ipv4_acl_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportIpv4AclFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportIpv4AclFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_ipv4_acl_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._sequences.internalValue = config.sequences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // sequences - computed: false, optional: true, required: false
  private _sequences = new TransportIpv4AclFeatureSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: TransportIpv4AclFeatureSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  public resetSequences() {
    this._sequences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(transportIpv4AclFeatureSequencesToTerraform, false)(this._sequences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      sequences: {
        value: cdktf.listMapperHcl(transportIpv4AclFeatureSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportIpv4AclFeatureSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
