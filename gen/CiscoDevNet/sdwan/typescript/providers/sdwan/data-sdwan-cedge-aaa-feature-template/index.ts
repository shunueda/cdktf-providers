// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_aaa_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCedgeAaaFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_aaa_feature_template#id DataSdwanCedgeAaaFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_aaa_feature_template#name DataSdwanCedgeAaaFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCedgeAaaFeatureTemplateAccountingRules {
}

export function dataSdwanCedgeAaaFeatureTemplateAccountingRulesToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateAccountingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateAccountingRulesToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateAccountingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateAccountingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateAccountingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateAccountingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getStringAttribute('groups');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // privilege_level - computed: true, optional: false, required: false
  public get privilegeLevel() {
    return this.getStringAttribute('privilege_level');
  }

  // start_stop - computed: true, optional: false, required: false
  public get startStop() {
    return this.getBooleanAttribute('start_stop');
  }

  // start_stop_variable - computed: true, optional: false, required: false
  public get startStopVariable() {
    return this.getStringAttribute('start_stop_variable');
  }
}

export class DataSdwanCedgeAaaFeatureTemplateAccountingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateAccountingRulesOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateAccountingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateAuthorizationRules {
}

export function dataSdwanCedgeAaaFeatureTemplateAuthorizationRulesToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateAuthorizationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateAuthorizationRulesToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateAuthorizationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateAuthorizationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateAuthorizationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateAuthorizationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authenticated - computed: true, optional: false, required: false
  public get authenticated() {
    return this.getBooleanAttribute('authenticated');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getStringAttribute('groups');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // privilege_level - computed: true, optional: false, required: false
  public get privilegeLevel() {
    return this.getStringAttribute('privilege_level');
  }
}

export class DataSdwanCedgeAaaFeatureTemplateAuthorizationRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateAuthorizationRulesOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateAuthorizationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurations {
}

export function dataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // server_key - computed: true, optional: false, required: false
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }

  // server_key_variable - computed: true, optional: false, required: false
  public get serverKeyVariable() {
    return this.getStringAttribute('server_key_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateRadiusClients {
}

export function dataSdwanCedgeAaaFeatureTemplateRadiusClientsToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateRadiusClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateRadiusClientsToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateRadiusClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateRadiusClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateRadiusClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateRadiusClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ip - computed: true, optional: false, required: false
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }

  // client_ip_variable - computed: true, optional: false, required: false
  public get clientIpVariable() {
    return this.getStringAttribute('client_ip_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // vpn_configurations - computed: true, optional: false, required: false
  private _vpnConfigurations = new DataSdwanCedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsList(this, "vpn_configurations", false);
  public get vpnConfigurations() {
    return this._vpnConfigurations;
  }
}

export class DataSdwanCedgeAaaFeatureTemplateRadiusClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateRadiusClientsOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateRadiusClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServers {
}

export function dataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServersToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServersToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounting_port - computed: true, optional: false, required: false
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }

  // accounting_port_variable - computed: true, optional: false, required: false
  public get accountingPortVariable() {
    return this.getStringAttribute('accounting_port_variable');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // authentication_port - computed: true, optional: false, required: false
  public get authenticationPort() {
    return this.getNumberAttribute('authentication_port');
  }

  // authentication_port_variable - computed: true, optional: false, required: false
  public get authenticationPortVariable() {
    return this.getStringAttribute('authentication_port_variable');
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_type_variable - computed: true, optional: false, required: false
  public get keyTypeVariable() {
    return this.getStringAttribute('key_type_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // retransmit - computed: true, optional: false, required: false
  public get retransmit() {
    return this.getNumberAttribute('retransmit');
  }

  // retransmit_variable - computed: true, optional: false, required: false
  public get retransmitVariable() {
    return this.getStringAttribute('retransmit_variable');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // secret_key_variable - computed: true, optional: false, required: false
  public get secretKeyVariable() {
    return this.getStringAttribute('secret_key_variable');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // timeout_variable - computed: true, optional: false, required: false
  public get timeoutVariable() {
    return this.getStringAttribute('timeout_variable');
  }
}

export class DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServersOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateRadiusServerGroups {
}

export function dataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateRadiusServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateRadiusServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateRadiusServerGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateRadiusServerGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServers {
}

export function dataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServersToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServersToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_variable - computed: true, optional: false, required: false
  public get portVariable() {
    return this.getStringAttribute('port_variable');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // secret_key_variable - computed: true, optional: false, required: false
  public get secretKeyVariable() {
    return this.getStringAttribute('secret_key_variable');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // timeout_variable - computed: true, optional: false, required: false
  public get timeoutVariable() {
    return this.getStringAttribute('timeout_variable');
  }
}

export class DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServersOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateTacacsServerGroups {
}

export function dataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateTacacsServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateTacacsServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateTacacsServerGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateTacacsServerGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeys {
}

export function dataSdwanCedgeAaaFeatureTemplateUsersSshPubkeysToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateUsersSshPubkeysToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_string - computed: true, optional: false, required: false
  public get keyString() {
    return this.getStringAttribute('key_string');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_type_variable - computed: true, optional: false, required: false
  public get keyTypeVariable() {
    return this.getStringAttribute('key_type_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeysList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeysOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgeAaaFeatureTemplateUsers {
}

export function dataSdwanCedgeAaaFeatureTemplateUsersToTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgeAaaFeatureTemplateUsersToHclTerraform(struct?: DataSdwanCedgeAaaFeatureTemplateUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgeAaaFeatureTemplateUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgeAaaFeatureTemplateUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgeAaaFeatureTemplateUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // privilege_level - computed: true, optional: false, required: false
  public get privilegeLevel() {
    return this.getStringAttribute('privilege_level');
  }

  // privilege_level_variable - computed: true, optional: false, required: false
  public get privilegeLevelVariable() {
    return this.getStringAttribute('privilege_level_variable');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // ssh_pubkeys - computed: true, optional: false, required: false
  private _sshPubkeys = new DataSdwanCedgeAaaFeatureTemplateUsersSshPubkeysList(this, "ssh_pubkeys", false);
  public get sshPubkeys() {
    return this._sshPubkeys;
  }
}

export class DataSdwanCedgeAaaFeatureTemplateUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgeAaaFeatureTemplateUsersOutputReference {
    return new DataSdwanCedgeAaaFeatureTemplateUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_aaa_feature_template sdwan_cedge_aaa_feature_template}
*/
export class DataSdwanCedgeAaaFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cedge_aaa_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCedgeAaaFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCedgeAaaFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCedgeAaaFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_aaa_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCedgeAaaFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cedge_aaa_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_aaa_feature_template sdwan_cedge_aaa_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCedgeAaaFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCedgeAaaFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cedge_aaa_feature_template',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_rules - computed: true, optional: false, required: false
  private _accountingRules = new DataSdwanCedgeAaaFeatureTemplateAccountingRulesList(this, "accounting_rules", false);
  public get accountingRules() {
    return this._accountingRules;
  }

  // authorization_config_commands - computed: true, optional: false, required: false
  public get authorizationConfigCommands() {
    return this.getBooleanAttribute('authorization_config_commands');
  }

  // authorization_config_commands_variable - computed: true, optional: false, required: false
  public get authorizationConfigCommandsVariable() {
    return this.getStringAttribute('authorization_config_commands_variable');
  }

  // authorization_console - computed: true, optional: false, required: false
  public get authorizationConsole() {
    return this.getBooleanAttribute('authorization_console');
  }

  // authorization_console_variable - computed: true, optional: false, required: false
  public get authorizationConsoleVariable() {
    return this.getStringAttribute('authorization_console_variable');
  }

  // authorization_rules - computed: true, optional: false, required: false
  private _authorizationRules = new DataSdwanCedgeAaaFeatureTemplateAuthorizationRulesList(this, "authorization_rules", false);
  public get authorizationRules() {
    return this._authorizationRules;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // dot1x_accounting - computed: true, optional: false, required: false
  public get dot1XAccounting() {
    return this.getBooleanAttribute('dot1x_accounting');
  }

  // dot1x_accounting_variable - computed: true, optional: false, required: false
  public get dot1XAccountingVariable() {
    return this.getStringAttribute('dot1x_accounting_variable');
  }

  // dot1x_authentication - computed: true, optional: false, required: false
  public get dot1XAuthentication() {
    return this.getBooleanAttribute('dot1x_authentication');
  }

  // dot1x_authentication_variable - computed: true, optional: false, required: false
  public get dot1XAuthenticationVariable() {
    return this.getStringAttribute('dot1x_authentication_variable');
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

  // radius_clients - computed: true, optional: false, required: false
  private _radiusClients = new DataSdwanCedgeAaaFeatureTemplateRadiusClientsList(this, "radius_clients", false);
  public get radiusClients() {
    return this._radiusClients;
  }

  // radius_dynamic_author_authentication_type - computed: true, optional: false, required: false
  public get radiusDynamicAuthorAuthenticationType() {
    return this.getStringAttribute('radius_dynamic_author_authentication_type');
  }

  // radius_dynamic_author_authentication_type_variable - computed: true, optional: false, required: false
  public get radiusDynamicAuthorAuthenticationTypeVariable() {
    return this.getStringAttribute('radius_dynamic_author_authentication_type_variable');
  }

  // radius_dynamic_author_domain_stripping - computed: true, optional: false, required: false
  public get radiusDynamicAuthorDomainStripping() {
    return this.getStringAttribute('radius_dynamic_author_domain_stripping');
  }

  // radius_dynamic_author_domain_stripping_variable - computed: true, optional: false, required: false
  public get radiusDynamicAuthorDomainStrippingVariable() {
    return this.getStringAttribute('radius_dynamic_author_domain_stripping_variable');
  }

  // radius_dynamic_author_port - computed: true, optional: false, required: false
  public get radiusDynamicAuthorPort() {
    return this.getNumberAttribute('radius_dynamic_author_port');
  }

  // radius_dynamic_author_port_variable - computed: true, optional: false, required: false
  public get radiusDynamicAuthorPortVariable() {
    return this.getStringAttribute('radius_dynamic_author_port_variable');
  }

  // radius_dynamic_author_server_key - computed: true, optional: false, required: false
  public get radiusDynamicAuthorServerKey() {
    return this.getStringAttribute('radius_dynamic_author_server_key');
  }

  // radius_dynamic_author_server_key_variable - computed: true, optional: false, required: false
  public get radiusDynamicAuthorServerKeyVariable() {
    return this.getStringAttribute('radius_dynamic_author_server_key_variable');
  }

  // radius_server_groups - computed: true, optional: false, required: false
  private _radiusServerGroups = new DataSdwanCedgeAaaFeatureTemplateRadiusServerGroupsList(this, "radius_server_groups", false);
  public get radiusServerGroups() {
    return this._radiusServerGroups;
  }

  // radius_trustsec_cts_authorization_list - computed: true, optional: false, required: false
  public get radiusTrustsecCtsAuthorizationList() {
    return this.getStringAttribute('radius_trustsec_cts_authorization_list');
  }

  // radius_trustsec_cts_authorization_list_variable - computed: true, optional: false, required: false
  public get radiusTrustsecCtsAuthorizationListVariable() {
    return this.getStringAttribute('radius_trustsec_cts_authorization_list_variable');
  }

  // radius_trustsec_group - computed: true, optional: false, required: false
  public get radiusTrustsecGroup() {
    return this.getStringAttribute('radius_trustsec_group');
  }

  // server_groups_priority_order - computed: true, optional: false, required: false
  public get serverGroupsPriorityOrder() {
    return this.getStringAttribute('server_groups_priority_order');
  }

  // tacacs_server_groups - computed: true, optional: false, required: false
  private _tacacsServerGroups = new DataSdwanCedgeAaaFeatureTemplateTacacsServerGroupsList(this, "tacacs_server_groups", false);
  public get tacacsServerGroups() {
    return this._tacacsServerGroups;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataSdwanCedgeAaaFeatureTemplateUsersList(this, "users", false);
  public get users() {
    return this._users;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
