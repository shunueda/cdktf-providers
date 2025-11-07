// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/aaa_accounting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeAaaAccountingConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/aaa_accounting#device DataIosxeAaaAccounting#device}
  */
  readonly device?: string;
}
export interface DataIosxeAaaAccountingCommands {
}

export function dataIosxeAaaAccountingCommandsToTerraform(struct?: DataIosxeAaaAccountingCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAccountingCommandsToHclTerraform(struct?: DataIosxeAaaAccountingCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAccountingCommandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAccountingCommands | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAccountingCommands | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // broadcast - computed: true, optional: false, required: false
  public get broadcast() {
    return this.getBooleanAttribute('broadcast');
  }

  // group1_group - computed: true, optional: false, required: false
  public get group1Group() {
    return this.getStringAttribute('group1_group');
  }

  // group2_group - computed: true, optional: false, required: false
  public get group2Group() {
    return this.getStringAttribute('group2_group');
  }

  // group3_group - computed: true, optional: false, required: false
  public get group3Group() {
    return this.getStringAttribute('group3_group');
  }

  // group4_group - computed: true, optional: false, required: false
  public get group4Group() {
    return this.getStringAttribute('group4_group');
  }

  // group_broadcast - computed: true, optional: false, required: false
  public get groupBroadcast() {
    return this.getBooleanAttribute('group_broadcast');
  }

  // group_logger - computed: true, optional: false, required: false
  public get groupLogger() {
    return this.getBooleanAttribute('group_logger');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // list_name - computed: true, optional: false, required: false
  public get listName() {
    return this.getStringAttribute('list_name');
  }
}

export class DataIosxeAaaAccountingCommandsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAccountingCommandsOutputReference {
    return new DataIosxeAaaAccountingCommandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaAccountingConnections {
}

export function dataIosxeAaaAccountingConnectionsToTerraform(struct?: DataIosxeAaaAccountingConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAccountingConnectionsToHclTerraform(struct?: DataIosxeAaaAccountingConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAccountingConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAccountingConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAccountingConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // none - computed: true, optional: false, required: false
  public get none() {
    return this.getBooleanAttribute('none');
  }

  // start_stop_broadcast - computed: true, optional: false, required: false
  public get startStopBroadcast() {
    return this.getBooleanAttribute('start_stop_broadcast');
  }

  // start_stop_group1 - computed: true, optional: false, required: false
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }

  // start_stop_group2 - computed: true, optional: false, required: false
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }

  // start_stop_group3 - computed: true, optional: false, required: false
  public get startStopGroup3() {
    return this.getStringAttribute('start_stop_group3');
  }

  // start_stop_group4 - computed: true, optional: false, required: false
  public get startStopGroup4() {
    return this.getStringAttribute('start_stop_group4');
  }

  // start_stop_logger - computed: true, optional: false, required: false
  public get startStopLogger() {
    return this.getBooleanAttribute('start_stop_logger');
  }

  // stop_only_broadcast - computed: true, optional: false, required: false
  public get stopOnlyBroadcast() {
    return this.getBooleanAttribute('stop_only_broadcast');
  }

  // stop_only_group1 - computed: true, optional: false, required: false
  public get stopOnlyGroup1() {
    return this.getStringAttribute('stop_only_group1');
  }

  // stop_only_group2 - computed: true, optional: false, required: false
  public get stopOnlyGroup2() {
    return this.getStringAttribute('stop_only_group2');
  }

  // stop_only_group3 - computed: true, optional: false, required: false
  public get stopOnlyGroup3() {
    return this.getStringAttribute('stop_only_group3');
  }

  // stop_only_group4 - computed: true, optional: false, required: false
  public get stopOnlyGroup4() {
    return this.getStringAttribute('stop_only_group4');
  }

  // stop_only_logger - computed: true, optional: false, required: false
  public get stopOnlyLogger() {
    return this.getBooleanAttribute('stop_only_logger');
  }

  // wait_start_broadcast - computed: true, optional: false, required: false
  public get waitStartBroadcast() {
    return this.getBooleanAttribute('wait_start_broadcast');
  }

  // wait_start_group1 - computed: true, optional: false, required: false
  public get waitStartGroup1() {
    return this.getStringAttribute('wait_start_group1');
  }

  // wait_start_group2 - computed: true, optional: false, required: false
  public get waitStartGroup2() {
    return this.getStringAttribute('wait_start_group2');
  }

  // wait_start_group3 - computed: true, optional: false, required: false
  public get waitStartGroup3() {
    return this.getStringAttribute('wait_start_group3');
  }

  // wait_start_group4 - computed: true, optional: false, required: false
  public get waitStartGroup4() {
    return this.getStringAttribute('wait_start_group4');
  }

  // wait_start_logger - computed: true, optional: false, required: false
  public get waitStartLogger() {
    return this.getBooleanAttribute('wait_start_logger');
  }
}

export class DataIosxeAaaAccountingConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAccountingConnectionsOutputReference {
    return new DataIosxeAaaAccountingConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaAccountingExecs {
}

export function dataIosxeAaaAccountingExecsToTerraform(struct?: DataIosxeAaaAccountingExecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAccountingExecsToHclTerraform(struct?: DataIosxeAaaAccountingExecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAccountingExecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAccountingExecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAccountingExecs | undefined) {
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

  // none - computed: true, optional: false, required: false
  public get none() {
    return this.getBooleanAttribute('none');
  }

  // start_stop_broadcast - computed: true, optional: false, required: false
  public get startStopBroadcast() {
    return this.getBooleanAttribute('start_stop_broadcast');
  }

  // start_stop_group1 - computed: true, optional: false, required: false
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }

  // start_stop_group2 - computed: true, optional: false, required: false
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }

  // start_stop_group3 - computed: true, optional: false, required: false
  public get startStopGroup3() {
    return this.getStringAttribute('start_stop_group3');
  }

  // start_stop_group4 - computed: true, optional: false, required: false
  public get startStopGroup4() {
    return this.getStringAttribute('start_stop_group4');
  }

  // start_stop_logger - computed: true, optional: false, required: false
  public get startStopLogger() {
    return this.getBooleanAttribute('start_stop_logger');
  }

  // stop_only_broadcast - computed: true, optional: false, required: false
  public get stopOnlyBroadcast() {
    return this.getBooleanAttribute('stop_only_broadcast');
  }

  // stop_only_group1 - computed: true, optional: false, required: false
  public get stopOnlyGroup1() {
    return this.getStringAttribute('stop_only_group1');
  }

  // stop_only_group2 - computed: true, optional: false, required: false
  public get stopOnlyGroup2() {
    return this.getStringAttribute('stop_only_group2');
  }

  // stop_only_group3 - computed: true, optional: false, required: false
  public get stopOnlyGroup3() {
    return this.getStringAttribute('stop_only_group3');
  }

  // stop_only_group4 - computed: true, optional: false, required: false
  public get stopOnlyGroup4() {
    return this.getStringAttribute('stop_only_group4');
  }

  // stop_only_logger - computed: true, optional: false, required: false
  public get stopOnlyLogger() {
    return this.getBooleanAttribute('stop_only_logger');
  }

  // wait_start_broadcast - computed: true, optional: false, required: false
  public get waitStartBroadcast() {
    return this.getBooleanAttribute('wait_start_broadcast');
  }

  // wait_start_group1 - computed: true, optional: false, required: false
  public get waitStartGroup1() {
    return this.getStringAttribute('wait_start_group1');
  }

  // wait_start_group2 - computed: true, optional: false, required: false
  public get waitStartGroup2() {
    return this.getStringAttribute('wait_start_group2');
  }

  // wait_start_group3 - computed: true, optional: false, required: false
  public get waitStartGroup3() {
    return this.getStringAttribute('wait_start_group3');
  }

  // wait_start_group4 - computed: true, optional: false, required: false
  public get waitStartGroup4() {
    return this.getStringAttribute('wait_start_group4');
  }

  // wait_start_logger - computed: true, optional: false, required: false
  public get waitStartLogger() {
    return this.getBooleanAttribute('wait_start_logger');
  }
}

export class DataIosxeAaaAccountingExecsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAccountingExecsOutputReference {
    return new DataIosxeAaaAccountingExecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaAccountingIdentities {
}

export function dataIosxeAaaAccountingIdentitiesToTerraform(struct?: DataIosxeAaaAccountingIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAccountingIdentitiesToHclTerraform(struct?: DataIosxeAaaAccountingIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAccountingIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAccountingIdentities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAccountingIdentities | undefined) {
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

  // start_stop_broadcast - computed: true, optional: false, required: false
  public get startStopBroadcast() {
    return this.getBooleanAttribute('start_stop_broadcast');
  }

  // start_stop_group1 - computed: true, optional: false, required: false
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }

  // start_stop_group2 - computed: true, optional: false, required: false
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }

  // start_stop_group3 - computed: true, optional: false, required: false
  public get startStopGroup3() {
    return this.getStringAttribute('start_stop_group3');
  }

  // start_stop_group4 - computed: true, optional: false, required: false
  public get startStopGroup4() {
    return this.getStringAttribute('start_stop_group4');
  }

  // start_stop_group_broadcast - computed: true, optional: false, required: false
  public get startStopGroupBroadcast() {
    return this.getBooleanAttribute('start_stop_group_broadcast');
  }

  // start_stop_group_logger - computed: true, optional: false, required: false
  public get startStopGroupLogger() {
    return this.getBooleanAttribute('start_stop_group_logger');
  }
}

export class DataIosxeAaaAccountingIdentitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAccountingIdentitiesOutputReference {
    return new DataIosxeAaaAccountingIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaAccountingNetworks {
}

export function dataIosxeAaaAccountingNetworksToTerraform(struct?: DataIosxeAaaAccountingNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAccountingNetworksToHclTerraform(struct?: DataIosxeAaaAccountingNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAccountingNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAccountingNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAccountingNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // start_stop_group1 - computed: true, optional: false, required: false
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }

  // start_stop_group2 - computed: true, optional: false, required: false
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }
}

export class DataIosxeAaaAccountingNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAccountingNetworksOutputReference {
    return new DataIosxeAaaAccountingNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/aaa_accounting iosxe_aaa_accounting}
*/
export class DataIosxeAaaAccounting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_aaa_accounting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeAaaAccounting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeAaaAccounting to import
  * @param importFromId The id of the existing DataIosxeAaaAccounting that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/aaa_accounting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeAaaAccounting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_aaa_accounting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/aaa_accounting iosxe_aaa_accounting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeAaaAccountingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeAaaAccountingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_aaa_accounting',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commands - computed: true, optional: false, required: false
  private _commands = new DataIosxeAaaAccountingCommandsList(this, "commands", false);
  public get commands() {
    return this._commands;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataIosxeAaaAccountingConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // execs - computed: true, optional: false, required: false
  private _execs = new DataIosxeAaaAccountingExecsList(this, "execs", false);
  public get execs() {
    return this._execs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identities - computed: true, optional: false, required: false
  private _identities = new DataIosxeAaaAccountingIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }

  // identity_default_start_stop_group1 - computed: true, optional: false, required: false
  public get identityDefaultStartStopGroup1() {
    return this.getStringAttribute('identity_default_start_stop_group1');
  }

  // identity_default_start_stop_group2 - computed: true, optional: false, required: false
  public get identityDefaultStartStopGroup2() {
    return this.getStringAttribute('identity_default_start_stop_group2');
  }

  // identity_default_start_stop_group3 - computed: true, optional: false, required: false
  public get identityDefaultStartStopGroup3() {
    return this.getStringAttribute('identity_default_start_stop_group3');
  }

  // identity_default_start_stop_group4 - computed: true, optional: false, required: false
  public get identityDefaultStartStopGroup4() {
    return this.getStringAttribute('identity_default_start_stop_group4');
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataIosxeAaaAccountingNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // system_guarantee_first - computed: true, optional: false, required: false
  public get systemGuaranteeFirst() {
    return this.getBooleanAttribute('system_guarantee_first');
  }

  // update_newinfo_periodic - computed: true, optional: false, required: false
  public get updateNewinfoPeriodic() {
    return this.getNumberAttribute('update_newinfo_periodic');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
