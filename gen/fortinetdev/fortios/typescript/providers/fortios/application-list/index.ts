// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#app_replacemsg ApplicationList#app_replacemsg}
  */
  readonly appReplacemsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#comment ApplicationList#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#control_default_network_services ApplicationList#control_default_network_services}
  */
  readonly controlDefaultNetworkServices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#deep_app_inspection ApplicationList#deep_app_inspection}
  */
  readonly deepAppInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#dynamic_sort_subtable ApplicationList#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#enforce_default_app_port ApplicationList#enforce_default_app_port}
  */
  readonly enforceDefaultAppPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#extended_log ApplicationList#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#force_inclusion_ssl_di_sigs ApplicationList#force_inclusion_ssl_di_sigs}
  */
  readonly forceInclusionSslDiSigs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#get_all_tables ApplicationList#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#name ApplicationList#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#options ApplicationList#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#other_application_action ApplicationList#other_application_action}
  */
  readonly otherApplicationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#other_application_log ApplicationList#other_application_log}
  */
  readonly otherApplicationLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#p2p_black_list ApplicationList#p2p_black_list}
  */
  readonly p2PBlackList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#p2p_block_list ApplicationList#p2p_block_list}
  */
  readonly p2PBlockList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#replacemsg_group ApplicationList#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#unknown_application_action ApplicationList#unknown_application_action}
  */
  readonly unknownApplicationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#unknown_application_log ApplicationList#unknown_application_log}
  */
  readonly unknownApplicationLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#vdomparam ApplicationList#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * default_network_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#default_network_services ApplicationList#default_network_services}
  */
  readonly defaultNetworkServices?: ApplicationListDefaultNetworkServices[] | cdktf.IResolvable;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#entries ApplicationList#entries}
  */
  readonly entries?: ApplicationListEntries[] | cdktf.IResolvable;
}
export interface ApplicationListDefaultNetworkServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#port ApplicationList#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#services ApplicationList#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#violation_action ApplicationList#violation_action}
  */
  readonly violationAction?: string;
}

export function applicationListDefaultNetworkServicesToTerraform(struct?: ApplicationListDefaultNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    port: cdktf.numberToTerraform(struct!.port),
    services: cdktf.stringToTerraform(struct!.services),
    violation_action: cdktf.stringToTerraform(struct!.violationAction),
  }
}


export function applicationListDefaultNetworkServicesToHclTerraform(struct?: ApplicationListDefaultNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violation_action: {
      value: cdktf.stringToHclTerraform(struct!.violationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListDefaultNetworkServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListDefaultNetworkServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._violationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationAction = this._violationAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListDefaultNetworkServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._port = undefined;
      this._services = undefined;
      this._violationAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._port = value.port;
      this._services = value.services;
      this._violationAction = value.violationAction;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // port - computed: false, optional: true, required: false
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

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // violation_action - computed: true, optional: true, required: false
  private _violationAction?: string; 
  public get violationAction() {
    return this.getStringAttribute('violation_action');
  }
  public set violationAction(value: string) {
    this._violationAction = value;
  }
  public resetViolationAction() {
    this._violationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationActionInput() {
    return this._violationAction;
  }
}

export class ApplicationListDefaultNetworkServicesList extends cdktf.ComplexList {
  public internalValue? : ApplicationListDefaultNetworkServices[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListDefaultNetworkServicesOutputReference {
    return new ApplicationListDefaultNetworkServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationListEntriesApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function applicationListEntriesApplicationToTerraform(struct?: ApplicationListEntriesApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function applicationListEntriesApplicationToHclTerraform(struct?: ApplicationListEntriesApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListEntriesApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListEntriesApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListEntriesApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApplicationListEntriesApplicationList extends cdktf.ComplexList {
  public internalValue? : ApplicationListEntriesApplication[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListEntriesApplicationOutputReference {
    return new ApplicationListEntriesApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationListEntriesCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function applicationListEntriesCategoryToTerraform(struct?: ApplicationListEntriesCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function applicationListEntriesCategoryToHclTerraform(struct?: ApplicationListEntriesCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListEntriesCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListEntriesCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListEntriesCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApplicationListEntriesCategoryList extends cdktf.ComplexList {
  public internalValue? : ApplicationListEntriesCategory[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListEntriesCategoryOutputReference {
    return new ApplicationListEntriesCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationListEntriesExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function applicationListEntriesExclusionToTerraform(struct?: ApplicationListEntriesExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function applicationListEntriesExclusionToHclTerraform(struct?: ApplicationListEntriesExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListEntriesExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListEntriesExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListEntriesExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApplicationListEntriesExclusionList extends cdktf.ComplexList {
  public internalValue? : ApplicationListEntriesExclusion[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListEntriesExclusionOutputReference {
    return new ApplicationListEntriesExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationListEntriesParametersMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#name ApplicationList#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#value ApplicationList#value}
  */
  readonly value?: string;
}

export function applicationListEntriesParametersMembersToTerraform(struct?: ApplicationListEntriesParametersMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationListEntriesParametersMembersToHclTerraform(struct?: ApplicationListEntriesParametersMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListEntriesParametersMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListEntriesParametersMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListEntriesParametersMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationListEntriesParametersMembersList extends cdktf.ComplexList {
  public internalValue? : ApplicationListEntriesParametersMembers[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListEntriesParametersMembersOutputReference {
    return new ApplicationListEntriesParametersMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationListEntriesParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#value ApplicationList#value}
  */
  readonly value?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#members ApplicationList#members}
  */
  readonly members?: ApplicationListEntriesParametersMembers[] | cdktf.IResolvable;
}

export function applicationListEntriesParametersToTerraform(struct?: ApplicationListEntriesParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
    members: cdktf.listMapper(applicationListEntriesParametersMembersToTerraform, true)(struct!.members),
  }
}


export function applicationListEntriesParametersToHclTerraform(struct?: ApplicationListEntriesParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(applicationListEntriesParametersMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationListEntriesParametersMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListEntriesParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListEntriesParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListEntriesParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
      this._members.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
      this._members.internalValue = value.members;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // members - computed: false, optional: true, required: false
  private _members = new ApplicationListEntriesParametersMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ApplicationListEntriesParametersMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}

export class ApplicationListEntriesParametersList extends cdktf.ComplexList {
  public internalValue? : ApplicationListEntriesParameters[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListEntriesParametersOutputReference {
    return new ApplicationListEntriesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationListEntriesRisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#level ApplicationList#level}
  */
  readonly level?: number;
}

export function applicationListEntriesRiskToTerraform(struct?: ApplicationListEntriesRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.numberToTerraform(struct!.level),
  }
}


export function applicationListEntriesRiskToHclTerraform(struct?: ApplicationListEntriesRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListEntriesRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListEntriesRisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListEntriesRisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class ApplicationListEntriesRiskList extends cdktf.ComplexList {
  public internalValue? : ApplicationListEntriesRisk[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListEntriesRiskOutputReference {
    return new ApplicationListEntriesRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationListEntriesSubCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function applicationListEntriesSubCategoryToTerraform(struct?: ApplicationListEntriesSubCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function applicationListEntriesSubCategoryToHclTerraform(struct?: ApplicationListEntriesSubCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListEntriesSubCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListEntriesSubCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListEntriesSubCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApplicationListEntriesSubCategoryList extends cdktf.ComplexList {
  public internalValue? : ApplicationListEntriesSubCategory[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListEntriesSubCategoryOutputReference {
    return new ApplicationListEntriesSubCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationListEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#action ApplicationList#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#behavior ApplicationList#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#id ApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#log ApplicationList#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#log_packet ApplicationList#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#per_ip_shaper ApplicationList#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#popularity ApplicationList#popularity}
  */
  readonly popularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#protocols ApplicationList#protocols}
  */
  readonly protocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#quarantine ApplicationList#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#quarantine_expiry ApplicationList#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#quarantine_log ApplicationList#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#rate_count ApplicationList#rate_count}
  */
  readonly rateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#rate_duration ApplicationList#rate_duration}
  */
  readonly rateDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#rate_mode ApplicationList#rate_mode}
  */
  readonly rateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#rate_track ApplicationList#rate_track}
  */
  readonly rateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#session_ttl ApplicationList#session_ttl}
  */
  readonly sessionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#shaper ApplicationList#shaper}
  */
  readonly shaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#shaper_reverse ApplicationList#shaper_reverse}
  */
  readonly shaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#technology ApplicationList#technology}
  */
  readonly technology?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#vendor ApplicationList#vendor}
  */
  readonly vendor?: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#application ApplicationList#application}
  */
  readonly application?: ApplicationListEntriesApplication[] | cdktf.IResolvable;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#category ApplicationList#category}
  */
  readonly category?: ApplicationListEntriesCategory[] | cdktf.IResolvable;
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#exclusion ApplicationList#exclusion}
  */
  readonly exclusion?: ApplicationListEntriesExclusion[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#parameters ApplicationList#parameters}
  */
  readonly parameters?: ApplicationListEntriesParameters[] | cdktf.IResolvable;
  /**
  * risk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#risk ApplicationList#risk}
  */
  readonly risk?: ApplicationListEntriesRisk[] | cdktf.IResolvable;
  /**
  * sub_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#sub_category ApplicationList#sub_category}
  */
  readonly subCategory?: ApplicationListEntriesSubCategory[] | cdktf.IResolvable;
}

export function applicationListEntriesToTerraform(struct?: ApplicationListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    behavior: cdktf.stringToTerraform(struct!.behavior),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    log_packet: cdktf.stringToTerraform(struct!.logPacket),
    per_ip_shaper: cdktf.stringToTerraform(struct!.perIpShaper),
    popularity: cdktf.stringToTerraform(struct!.popularity),
    protocols: cdktf.stringToTerraform(struct!.protocols),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    quarantine_expiry: cdktf.stringToTerraform(struct!.quarantineExpiry),
    quarantine_log: cdktf.stringToTerraform(struct!.quarantineLog),
    rate_count: cdktf.numberToTerraform(struct!.rateCount),
    rate_duration: cdktf.numberToTerraform(struct!.rateDuration),
    rate_mode: cdktf.stringToTerraform(struct!.rateMode),
    rate_track: cdktf.stringToTerraform(struct!.rateTrack),
    session_ttl: cdktf.numberToTerraform(struct!.sessionTtl),
    shaper: cdktf.stringToTerraform(struct!.shaper),
    shaper_reverse: cdktf.stringToTerraform(struct!.shaperReverse),
    technology: cdktf.stringToTerraform(struct!.technology),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    application: cdktf.listMapper(applicationListEntriesApplicationToTerraform, true)(struct!.application),
    category: cdktf.listMapper(applicationListEntriesCategoryToTerraform, true)(struct!.category),
    exclusion: cdktf.listMapper(applicationListEntriesExclusionToTerraform, true)(struct!.exclusion),
    parameters: cdktf.listMapper(applicationListEntriesParametersToTerraform, true)(struct!.parameters),
    risk: cdktf.listMapper(applicationListEntriesRiskToTerraform, true)(struct!.risk),
    sub_category: cdktf.listMapper(applicationListEntriesSubCategoryToTerraform, true)(struct!.subCategory),
  }
}


export function applicationListEntriesToHclTerraform(struct?: ApplicationListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_packet: {
      value: cdktf.stringToHclTerraform(struct!.logPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ip_shaper: {
      value: cdktf.stringToHclTerraform(struct!.perIpShaper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    popularity: {
      value: cdktf.stringToHclTerraform(struct!.popularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_expiry: {
      value: cdktf.stringToHclTerraform(struct!.quarantineExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_log: {
      value: cdktf.stringToHclTerraform(struct!.quarantineLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_count: {
      value: cdktf.numberToHclTerraform(struct!.rateCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_duration: {
      value: cdktf.numberToHclTerraform(struct!.rateDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_mode: {
      value: cdktf.stringToHclTerraform(struct!.rateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_track: {
      value: cdktf.stringToHclTerraform(struct!.rateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_ttl: {
      value: cdktf.numberToHclTerraform(struct!.sessionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shaper: {
      value: cdktf.stringToHclTerraform(struct!.shaper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shaper_reverse: {
      value: cdktf.stringToHclTerraform(struct!.shaperReverse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology: {
      value: cdktf.stringToHclTerraform(struct!.technology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(applicationListEntriesApplicationToHclTerraform, true)(struct!.application),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationListEntriesApplicationList",
    },
    category: {
      value: cdktf.listMapperHcl(applicationListEntriesCategoryToHclTerraform, true)(struct!.category),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationListEntriesCategoryList",
    },
    exclusion: {
      value: cdktf.listMapperHcl(applicationListEntriesExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationListEntriesExclusionList",
    },
    parameters: {
      value: cdktf.listMapperHcl(applicationListEntriesParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationListEntriesParametersList",
    },
    risk: {
      value: cdktf.listMapperHcl(applicationListEntriesRiskToHclTerraform, true)(struct!.risk),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationListEntriesRiskList",
    },
    sub_category: {
      value: cdktf.listMapperHcl(applicationListEntriesSubCategoryToHclTerraform, true)(struct!.subCategory),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationListEntriesSubCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPacket = this._logPacket;
    }
    if (this._perIpShaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.perIpShaper = this._perIpShaper;
    }
    if (this._popularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.popularity = this._popularity;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._quarantineExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineExpiry = this._quarantineExpiry;
    }
    if (this._quarantineLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineLog = this._quarantineLog;
    }
    if (this._rateCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateCount = this._rateCount;
    }
    if (this._rateDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateDuration = this._rateDuration;
    }
    if (this._rateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateMode = this._rateMode;
    }
    if (this._rateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateTrack = this._rateTrack;
    }
    if (this._sessionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTtl = this._sessionTtl;
    }
    if (this._shaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.shaper = this._shaper;
    }
    if (this._shaperReverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.shaperReverse = this._shaperReverse;
    }
    if (this._technology !== undefined) {
      hasAnyValues = true;
      internalValueResult.technology = this._technology;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._risk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.risk = this._risk?.internalValue;
    }
    if (this._subCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subCategory = this._subCategory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._behavior = undefined;
      this._id = undefined;
      this._log = undefined;
      this._logPacket = undefined;
      this._perIpShaper = undefined;
      this._popularity = undefined;
      this._protocols = undefined;
      this._quarantine = undefined;
      this._quarantineExpiry = undefined;
      this._quarantineLog = undefined;
      this._rateCount = undefined;
      this._rateDuration = undefined;
      this._rateMode = undefined;
      this._rateTrack = undefined;
      this._sessionTtl = undefined;
      this._shaper = undefined;
      this._shaperReverse = undefined;
      this._technology = undefined;
      this._vendor = undefined;
      this._application.internalValue = undefined;
      this._category.internalValue = undefined;
      this._exclusion.internalValue = undefined;
      this._parameters.internalValue = undefined;
      this._risk.internalValue = undefined;
      this._subCategory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._behavior = value.behavior;
      this._id = value.id;
      this._log = value.log;
      this._logPacket = value.logPacket;
      this._perIpShaper = value.perIpShaper;
      this._popularity = value.popularity;
      this._protocols = value.protocols;
      this._quarantine = value.quarantine;
      this._quarantineExpiry = value.quarantineExpiry;
      this._quarantineLog = value.quarantineLog;
      this._rateCount = value.rateCount;
      this._rateDuration = value.rateDuration;
      this._rateMode = value.rateMode;
      this._rateTrack = value.rateTrack;
      this._sessionTtl = value.sessionTtl;
      this._shaper = value.shaper;
      this._shaperReverse = value.shaperReverse;
      this._technology = value.technology;
      this._vendor = value.vendor;
      this._application.internalValue = value.application;
      this._category.internalValue = value.category;
      this._exclusion.internalValue = value.exclusion;
      this._parameters.internalValue = value.parameters;
      this._risk.internalValue = value.risk;
      this._subCategory.internalValue = value.subCategory;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_packet - computed: true, optional: true, required: false
  private _logPacket?: string; 
  public get logPacket() {
    return this.getStringAttribute('log_packet');
  }
  public set logPacket(value: string) {
    this._logPacket = value;
  }
  public resetLogPacket() {
    this._logPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPacketInput() {
    return this._logPacket;
  }

  // per_ip_shaper - computed: false, optional: true, required: false
  private _perIpShaper?: string; 
  public get perIpShaper() {
    return this.getStringAttribute('per_ip_shaper');
  }
  public set perIpShaper(value: string) {
    this._perIpShaper = value;
  }
  public resetPerIpShaper() {
    this._perIpShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpShaperInput() {
    return this._perIpShaper;
  }

  // popularity - computed: true, optional: true, required: false
  private _popularity?: string; 
  public get popularity() {
    return this.getStringAttribute('popularity');
  }
  public set popularity(value: string) {
    this._popularity = value;
  }
  public resetPopularity() {
    this._popularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popularityInput() {
    return this._popularity;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // quarantine_expiry - computed: true, optional: true, required: false
  private _quarantineExpiry?: string; 
  public get quarantineExpiry() {
    return this.getStringAttribute('quarantine_expiry');
  }
  public set quarantineExpiry(value: string) {
    this._quarantineExpiry = value;
  }
  public resetQuarantineExpiry() {
    this._quarantineExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineExpiryInput() {
    return this._quarantineExpiry;
  }

  // quarantine_log - computed: true, optional: true, required: false
  private _quarantineLog?: string; 
  public get quarantineLog() {
    return this.getStringAttribute('quarantine_log');
  }
  public set quarantineLog(value: string) {
    this._quarantineLog = value;
  }
  public resetQuarantineLog() {
    this._quarantineLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLogInput() {
    return this._quarantineLog;
  }

  // rate_count - computed: false, optional: true, required: false
  private _rateCount?: number; 
  public get rateCount() {
    return this.getNumberAttribute('rate_count');
  }
  public set rateCount(value: number) {
    this._rateCount = value;
  }
  public resetRateCount() {
    this._rateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateCountInput() {
    return this._rateCount;
  }

  // rate_duration - computed: true, optional: true, required: false
  private _rateDuration?: number; 
  public get rateDuration() {
    return this.getNumberAttribute('rate_duration');
  }
  public set rateDuration(value: number) {
    this._rateDuration = value;
  }
  public resetRateDuration() {
    this._rateDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateDurationInput() {
    return this._rateDuration;
  }

  // rate_mode - computed: true, optional: true, required: false
  private _rateMode?: string; 
  public get rateMode() {
    return this.getStringAttribute('rate_mode');
  }
  public set rateMode(value: string) {
    this._rateMode = value;
  }
  public resetRateMode() {
    this._rateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateModeInput() {
    return this._rateMode;
  }

  // rate_track - computed: true, optional: true, required: false
  private _rateTrack?: string; 
  public get rateTrack() {
    return this.getStringAttribute('rate_track');
  }
  public set rateTrack(value: string) {
    this._rateTrack = value;
  }
  public resetRateTrack() {
    this._rateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateTrackInput() {
    return this._rateTrack;
  }

  // session_ttl - computed: false, optional: true, required: false
  private _sessionTtl?: number; 
  public get sessionTtl() {
    return this.getNumberAttribute('session_ttl');
  }
  public set sessionTtl(value: number) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }

  // shaper - computed: false, optional: true, required: false
  private _shaper?: string; 
  public get shaper() {
    return this.getStringAttribute('shaper');
  }
  public set shaper(value: string) {
    this._shaper = value;
  }
  public resetShaper() {
    this._shaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaperInput() {
    return this._shaper;
  }

  // shaper_reverse - computed: false, optional: true, required: false
  private _shaperReverse?: string; 
  public get shaperReverse() {
    return this.getStringAttribute('shaper_reverse');
  }
  public set shaperReverse(value: string) {
    this._shaperReverse = value;
  }
  public resetShaperReverse() {
    this._shaperReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaperReverseInput() {
    return this._shaperReverse;
  }

  // technology - computed: true, optional: true, required: false
  private _technology?: string; 
  public get technology() {
    return this.getStringAttribute('technology');
  }
  public set technology(value: string) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // application - computed: false, optional: true, required: false
  private _application = new ApplicationListEntriesApplicationList(this, "application", true);
  public get application() {
    return this._application;
  }
  public putApplication(value: ApplicationListEntriesApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // category - computed: false, optional: true, required: false
  private _category = new ApplicationListEntriesCategoryList(this, "category", true);
  public get category() {
    return this._category;
  }
  public putCategory(value: ApplicationListEntriesCategory[] | cdktf.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new ApplicationListEntriesExclusionList(this, "exclusion", true);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: ApplicationListEntriesExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ApplicationListEntriesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ApplicationListEntriesParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // risk - computed: false, optional: true, required: false
  private _risk = new ApplicationListEntriesRiskList(this, "risk", true);
  public get risk() {
    return this._risk;
  }
  public putRisk(value: ApplicationListEntriesRisk[] | cdktf.IResolvable) {
    this._risk.internalValue = value;
  }
  public resetRisk() {
    this._risk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk.internalValue;
  }

  // sub_category - computed: false, optional: true, required: false
  private _subCategory = new ApplicationListEntriesSubCategoryList(this, "sub_category", true);
  public get subCategory() {
    return this._subCategory;
  }
  public putSubCategory(value: ApplicationListEntriesSubCategory[] | cdktf.IResolvable) {
    this._subCategory.internalValue = value;
  }
  public resetSubCategory() {
    this._subCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory.internalValue;
  }
}

export class ApplicationListEntriesList extends cdktf.ComplexList {
  public internalValue? : ApplicationListEntries[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListEntriesOutputReference {
    return new ApplicationListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list fortios_application_list}
*/
export class ApplicationList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_application_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationList to import
  * @param importFromId The id of the existing ApplicationList that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_application_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/application_list fortios_application_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationListConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationListConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_application_list',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appReplacemsg = config.appReplacemsg;
    this._comment = config.comment;
    this._controlDefaultNetworkServices = config.controlDefaultNetworkServices;
    this._deepAppInspection = config.deepAppInspection;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._enforceDefaultAppPort = config.enforceDefaultAppPort;
    this._extendedLog = config.extendedLog;
    this._forceInclusionSslDiSigs = config.forceInclusionSslDiSigs;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._options = config.options;
    this._otherApplicationAction = config.otherApplicationAction;
    this._otherApplicationLog = config.otherApplicationLog;
    this._p2PBlackList = config.p2PBlackList;
    this._p2PBlockList = config.p2PBlockList;
    this._replacemsgGroup = config.replacemsgGroup;
    this._unknownApplicationAction = config.unknownApplicationAction;
    this._unknownApplicationLog = config.unknownApplicationLog;
    this._vdomparam = config.vdomparam;
    this._defaultNetworkServices.internalValue = config.defaultNetworkServices;
    this._entries.internalValue = config.entries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_replacemsg - computed: true, optional: true, required: false
  private _appReplacemsg?: string; 
  public get appReplacemsg() {
    return this.getStringAttribute('app_replacemsg');
  }
  public set appReplacemsg(value: string) {
    this._appReplacemsg = value;
  }
  public resetAppReplacemsg() {
    this._appReplacemsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appReplacemsgInput() {
    return this._appReplacemsg;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // control_default_network_services - computed: true, optional: true, required: false
  private _controlDefaultNetworkServices?: string; 
  public get controlDefaultNetworkServices() {
    return this.getStringAttribute('control_default_network_services');
  }
  public set controlDefaultNetworkServices(value: string) {
    this._controlDefaultNetworkServices = value;
  }
  public resetControlDefaultNetworkServices() {
    this._controlDefaultNetworkServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlDefaultNetworkServicesInput() {
    return this._controlDefaultNetworkServices;
  }

  // deep_app_inspection - computed: true, optional: true, required: false
  private _deepAppInspection?: string; 
  public get deepAppInspection() {
    return this.getStringAttribute('deep_app_inspection');
  }
  public set deepAppInspection(value: string) {
    this._deepAppInspection = value;
  }
  public resetDeepAppInspection() {
    this._deepAppInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepAppInspectionInput() {
    return this._deepAppInspection;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // enforce_default_app_port - computed: true, optional: true, required: false
  private _enforceDefaultAppPort?: string; 
  public get enforceDefaultAppPort() {
    return this.getStringAttribute('enforce_default_app_port');
  }
  public set enforceDefaultAppPort(value: string) {
    this._enforceDefaultAppPort = value;
  }
  public resetEnforceDefaultAppPort() {
    this._enforceDefaultAppPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDefaultAppPortInput() {
    return this._enforceDefaultAppPort;
  }

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // force_inclusion_ssl_di_sigs - computed: true, optional: true, required: false
  private _forceInclusionSslDiSigs?: string; 
  public get forceInclusionSslDiSigs() {
    return this.getStringAttribute('force_inclusion_ssl_di_sigs');
  }
  public set forceInclusionSslDiSigs(value: string) {
    this._forceInclusionSslDiSigs = value;
  }
  public resetForceInclusionSslDiSigs() {
    this._forceInclusionSslDiSigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInclusionSslDiSigsInput() {
    return this._forceInclusionSslDiSigs;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // options - computed: true, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // other_application_action - computed: true, optional: true, required: false
  private _otherApplicationAction?: string; 
  public get otherApplicationAction() {
    return this.getStringAttribute('other_application_action');
  }
  public set otherApplicationAction(value: string) {
    this._otherApplicationAction = value;
  }
  public resetOtherApplicationAction() {
    this._otherApplicationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherApplicationActionInput() {
    return this._otherApplicationAction;
  }

  // other_application_log - computed: true, optional: true, required: false
  private _otherApplicationLog?: string; 
  public get otherApplicationLog() {
    return this.getStringAttribute('other_application_log');
  }
  public set otherApplicationLog(value: string) {
    this._otherApplicationLog = value;
  }
  public resetOtherApplicationLog() {
    this._otherApplicationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherApplicationLogInput() {
    return this._otherApplicationLog;
  }

  // p2p_black_list - computed: false, optional: true, required: false
  private _p2PBlackList?: string; 
  public get p2PBlackList() {
    return this.getStringAttribute('p2p_black_list');
  }
  public set p2PBlackList(value: string) {
    this._p2PBlackList = value;
  }
  public resetP2PBlackList() {
    this._p2PBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PBlackListInput() {
    return this._p2PBlackList;
  }

  // p2p_block_list - computed: false, optional: true, required: false
  private _p2PBlockList?: string; 
  public get p2PBlockList() {
    return this.getStringAttribute('p2p_block_list');
  }
  public set p2PBlockList(value: string) {
    this._p2PBlockList = value;
  }
  public resetP2PBlockList() {
    this._p2PBlockList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PBlockListInput() {
    return this._p2PBlockList;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // unknown_application_action - computed: true, optional: true, required: false
  private _unknownApplicationAction?: string; 
  public get unknownApplicationAction() {
    return this.getStringAttribute('unknown_application_action');
  }
  public set unknownApplicationAction(value: string) {
    this._unknownApplicationAction = value;
  }
  public resetUnknownApplicationAction() {
    this._unknownApplicationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownApplicationActionInput() {
    return this._unknownApplicationAction;
  }

  // unknown_application_log - computed: true, optional: true, required: false
  private _unknownApplicationLog?: string; 
  public get unknownApplicationLog() {
    return this.getStringAttribute('unknown_application_log');
  }
  public set unknownApplicationLog(value: string) {
    this._unknownApplicationLog = value;
  }
  public resetUnknownApplicationLog() {
    this._unknownApplicationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownApplicationLogInput() {
    return this._unknownApplicationLog;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // default_network_services - computed: false, optional: true, required: false
  private _defaultNetworkServices = new ApplicationListDefaultNetworkServicesList(this, "default_network_services", false);
  public get defaultNetworkServices() {
    return this._defaultNetworkServices;
  }
  public putDefaultNetworkServices(value: ApplicationListDefaultNetworkServices[] | cdktf.IResolvable) {
    this._defaultNetworkServices.internalValue = value;
  }
  public resetDefaultNetworkServices() {
    this._defaultNetworkServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetworkServicesInput() {
    return this._defaultNetworkServices.internalValue;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new ApplicationListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ApplicationListEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_replacemsg: cdktf.stringToTerraform(this._appReplacemsg),
      comment: cdktf.stringToTerraform(this._comment),
      control_default_network_services: cdktf.stringToTerraform(this._controlDefaultNetworkServices),
      deep_app_inspection: cdktf.stringToTerraform(this._deepAppInspection),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      enforce_default_app_port: cdktf.stringToTerraform(this._enforceDefaultAppPort),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      force_inclusion_ssl_di_sigs: cdktf.stringToTerraform(this._forceInclusionSslDiSigs),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.stringToTerraform(this._options),
      other_application_action: cdktf.stringToTerraform(this._otherApplicationAction),
      other_application_log: cdktf.stringToTerraform(this._otherApplicationLog),
      p2p_black_list: cdktf.stringToTerraform(this._p2PBlackList),
      p2p_block_list: cdktf.stringToTerraform(this._p2PBlockList),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      unknown_application_action: cdktf.stringToTerraform(this._unknownApplicationAction),
      unknown_application_log: cdktf.stringToTerraform(this._unknownApplicationLog),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      default_network_services: cdktf.listMapper(applicationListDefaultNetworkServicesToTerraform, true)(this._defaultNetworkServices.internalValue),
      entries: cdktf.listMapper(applicationListEntriesToTerraform, true)(this._entries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_replacemsg: {
        value: cdktf.stringToHclTerraform(this._appReplacemsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_default_network_services: {
        value: cdktf.stringToHclTerraform(this._controlDefaultNetworkServices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deep_app_inspection: {
        value: cdktf.stringToHclTerraform(this._deepAppInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_default_app_port: {
        value: cdktf.stringToHclTerraform(this._enforceDefaultAppPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_inclusion_ssl_di_sigs: {
        value: cdktf.stringToHclTerraform(this._forceInclusionSslDiSigs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_application_action: {
        value: cdktf.stringToHclTerraform(this._otherApplicationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_application_log: {
        value: cdktf.stringToHclTerraform(this._otherApplicationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p2p_black_list: {
        value: cdktf.stringToHclTerraform(this._p2PBlackList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p2p_block_list: {
        value: cdktf.stringToHclTerraform(this._p2PBlockList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_application_action: {
        value: cdktf.stringToHclTerraform(this._unknownApplicationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_application_log: {
        value: cdktf.stringToHclTerraform(this._unknownApplicationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_network_services: {
        value: cdktf.listMapperHcl(applicationListDefaultNetworkServicesToHclTerraform, true)(this._defaultNetworkServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationListDefaultNetworkServicesList",
      },
      entries: {
        value: cdktf.listMapperHcl(applicationListEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationListEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
