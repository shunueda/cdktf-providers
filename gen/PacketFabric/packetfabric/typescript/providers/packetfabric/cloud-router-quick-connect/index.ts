// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRouterQuickConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The circuit ID of the Cloud Router connection that will be importing the routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#connection_circuit_id CloudRouterQuickConnect#connection_circuit_id}
  */
  readonly connectionCircuitId: string;
  /**
  * The circuit ID of your Cloud Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#cr_circuit_id CloudRouterQuickConnect#cr_circuit_id}
  */
  readonly crCircuitId: string;
  /**
  * The service UUID associated with the service provider's Quick Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#service_uuid CloudRouterQuickConnect#service_uuid}
  */
  readonly serviceUuid: string;
  /**
  * Subscription term of the Cloud Router Connection
  * 
  * 	Enum: ["1", "12", "24", "36"] Defaults: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#subscription_term CloudRouterQuickConnect#subscription_term}
  */
  readonly subscriptionTerm?: number;
  /**
  * import_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#import_filters CloudRouterQuickConnect#import_filters}
  */
  readonly importFilters?: CloudRouterQuickConnectImportFilters[] | cdktf.IResolvable;
  /**
  * return_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#return_filters CloudRouterQuickConnect#return_filters}
  */
  readonly returnFilters: CloudRouterQuickConnectReturnFilters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#timeouts CloudRouterQuickConnect#timeouts}
  */
  readonly timeouts?: CloudRouterQuickConnectTimeouts;
}
export interface CloudRouterQuickConnectImportFilters {
  /**
  * The local preference to apply to the prefix.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#local_preference CloudRouterQuickConnect#local_preference}
  */
  readonly localPreference?: number;
  /**
  * The match type for the imported prefix. This is set by the service provider.
  * 
  * 	Enum: `"exact"` `"orlonger"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#match_type CloudRouterQuickConnect#match_type}
  */
  readonly matchType?: string;
  /**
  * The route prefix that you will be importing from the Quick Connect. This is set by the service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#prefix CloudRouterQuickConnect#prefix}
  */
  readonly prefix?: string;
}

export function cloudRouterQuickConnectImportFiltersToTerraform(struct?: CloudRouterQuickConnectImportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function cloudRouterQuickConnectImportFiltersToHclTerraform(struct?: CloudRouterQuickConnectImportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterQuickConnectImportFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterQuickConnectImportFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterQuickConnectImportFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPreference = undefined;
      this._matchType = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPreference = value.localPreference;
      this._matchType = value.matchType;
      this._prefix = value.prefix;
    }
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class CloudRouterQuickConnectImportFiltersList extends cdktf.ComplexList {
  public internalValue? : CloudRouterQuickConnectImportFilters[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterQuickConnectImportFiltersOutputReference {
    return new CloudRouterQuickConnectImportFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterQuickConnectReturnFilters {
  /**
  * The AS prepend to apply to the exported/returned prefix.
  * 
  * 	Available range is 1 through 5. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#as_prepend CloudRouterQuickConnect#as_prepend}
  */
  readonly asPrepend?: number;
  /**
  * The match type of this prefix.
  * 
  * 	Enum: `"exact"` `"orlonger"` Defaults: exact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#match_type CloudRouterQuickConnect#match_type}
  */
  readonly matchType?: string;
  /**
  * The MED to apply to the exported/returned prefix.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#med CloudRouterQuickConnect#med}
  */
  readonly med?: number;
  /**
  * The prefix to export to the service provider that they will use for return traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#prefix CloudRouterQuickConnect#prefix}
  */
  readonly prefix: string;
}

export function cloudRouterQuickConnectReturnFiltersToTerraform(struct?: CloudRouterQuickConnectReturnFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_prepend: cdktf.numberToTerraform(struct!.asPrepend),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    med: cdktf.numberToTerraform(struct!.med),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function cloudRouterQuickConnectReturnFiltersToHclTerraform(struct?: CloudRouterQuickConnectReturnFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_prepend: {
      value: cdktf.numberToHclTerraform(struct!.asPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med: {
      value: cdktf.numberToHclTerraform(struct!.med),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterQuickConnectReturnFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterQuickConnectReturnFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPrepend = this._asPrepend;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._med !== undefined) {
      hasAnyValues = true;
      internalValueResult.med = this._med;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterQuickConnectReturnFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPrepend = undefined;
      this._matchType = undefined;
      this._med = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPrepend = value.asPrepend;
      this._matchType = value.matchType;
      this._med = value.med;
      this._prefix = value.prefix;
    }
  }

  // as_prepend - computed: false, optional: true, required: false
  private _asPrepend?: number; 
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }
  public set asPrepend(value: number) {
    this._asPrepend = value;
  }
  public resetAsPrepend() {
    this._asPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPrependInput() {
    return this._asPrepend;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // med - computed: false, optional: true, required: false
  private _med?: number; 
  public get med() {
    return this.getNumberAttribute('med');
  }
  public set med(value: number) {
    this._med = value;
  }
  public resetMed() {
    this._med = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class CloudRouterQuickConnectReturnFiltersList extends cdktf.ComplexList {
  public internalValue? : CloudRouterQuickConnectReturnFilters[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterQuickConnectReturnFiltersOutputReference {
    return new CloudRouterQuickConnectReturnFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterQuickConnectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#create CloudRouterQuickConnect#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#delete CloudRouterQuickConnect#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#read CloudRouterQuickConnect#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#update CloudRouterQuickConnect#update}
  */
  readonly update?: string;
}

export function cloudRouterQuickConnectTimeoutsToTerraform(struct?: CloudRouterQuickConnectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudRouterQuickConnectTimeoutsToHclTerraform(struct?: CloudRouterQuickConnectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterQuickConnectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudRouterQuickConnectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterQuickConnectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect packetfabric_cloud_router_quick_connect}
*/
export class CloudRouterQuickConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_quick_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRouterQuickConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRouterQuickConnect to import
  * @param importFromId The id of the existing CloudRouterQuickConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRouterQuickConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_quick_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_quick_connect packetfabric_cloud_router_quick_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRouterQuickConnectConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRouterQuickConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_quick_connect',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionCircuitId = config.connectionCircuitId;
    this._crCircuitId = config.crCircuitId;
    this._serviceUuid = config.serviceUuid;
    this._subscriptionTerm = config.subscriptionTerm;
    this._importFilters.internalValue = config.importFilters;
    this._returnFilters.internalValue = config.returnFilters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_circuit_id - computed: false, optional: false, required: true
  private _connectionCircuitId?: string; 
  public get connectionCircuitId() {
    return this.getStringAttribute('connection_circuit_id');
  }
  public set connectionCircuitId(value: string) {
    this._connectionCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCircuitIdInput() {
    return this._connectionCircuitId;
  }

  // connection_speed - computed: true, optional: false, required: false
  public get connectionSpeed() {
    return this.getStringAttribute('connection_speed');
  }

  // cr_circuit_id - computed: false, optional: false, required: true
  private _crCircuitId?: string; 
  public get crCircuitId() {
    return this.getStringAttribute('cr_circuit_id');
  }
  public set crCircuitId(value: string) {
    this._crCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crCircuitIdInput() {
    return this._crCircuitId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_defunct - computed: true, optional: false, required: false
  public get isDefunct() {
    return this.getBooleanAttribute('is_defunct');
  }

  // route_set_circuit_id - computed: true, optional: false, required: false
  public get routeSetCircuitId() {
    return this.getStringAttribute('route_set_circuit_id');
  }

  // service_uuid - computed: false, optional: false, required: true
  private _serviceUuid?: string; 
  public get serviceUuid() {
    return this.getStringAttribute('service_uuid');
  }
  public set serviceUuid(value: string) {
    this._serviceUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUuidInput() {
    return this._serviceUuid;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_term - computed: false, optional: true, required: false
  private _subscriptionTerm?: number; 
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
  public set subscriptionTerm(value: number) {
    this._subscriptionTerm = value;
  }
  public resetSubscriptionTerm() {
    this._subscriptionTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTermInput() {
    return this._subscriptionTerm;
  }

  // import_filters - computed: false, optional: true, required: false
  private _importFilters = new CloudRouterQuickConnectImportFiltersList(this, "import_filters", true);
  public get importFilters() {
    return this._importFilters;
  }
  public putImportFilters(value: CloudRouterQuickConnectImportFilters[] | cdktf.IResolvable) {
    this._importFilters.internalValue = value;
  }
  public resetImportFilters() {
    this._importFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importFiltersInput() {
    return this._importFilters.internalValue;
  }

  // return_filters - computed: false, optional: false, required: true
  private _returnFilters = new CloudRouterQuickConnectReturnFiltersList(this, "return_filters", true);
  public get returnFilters() {
    return this._returnFilters;
  }
  public putReturnFilters(value: CloudRouterQuickConnectReturnFilters[] | cdktf.IResolvable) {
    this._returnFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnFiltersInput() {
    return this._returnFilters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRouterQuickConnectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRouterQuickConnectTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_circuit_id: cdktf.stringToTerraform(this._connectionCircuitId),
      cr_circuit_id: cdktf.stringToTerraform(this._crCircuitId),
      service_uuid: cdktf.stringToTerraform(this._serviceUuid),
      subscription_term: cdktf.numberToTerraform(this._subscriptionTerm),
      import_filters: cdktf.listMapper(cloudRouterQuickConnectImportFiltersToTerraform, true)(this._importFilters.internalValue),
      return_filters: cdktf.listMapper(cloudRouterQuickConnectReturnFiltersToTerraform, true)(this._returnFilters.internalValue),
      timeouts: cloudRouterQuickConnectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_circuit_id: {
        value: cdktf.stringToHclTerraform(this._connectionCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cr_circuit_id: {
        value: cdktf.stringToHclTerraform(this._crCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_uuid: {
        value: cdktf.stringToHclTerraform(this._serviceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_term: {
        value: cdktf.numberToHclTerraform(this._subscriptionTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      import_filters: {
        value: cdktf.listMapperHcl(cloudRouterQuickConnectImportFiltersToHclTerraform, true)(this._importFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudRouterQuickConnectImportFiltersList",
      },
      return_filters: {
        value: cdktf.listMapperHcl(cloudRouterQuickConnectReturnFiltersToHclTerraform, true)(this._returnFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudRouterQuickConnectReturnFiltersList",
      },
      timeouts: {
        value: cloudRouterQuickConnectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudRouterQuickConnectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
