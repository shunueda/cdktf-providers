// https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AllowListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of IP addresses with comments to allow access to the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list#allow_list AllowList#allow_list}
  */
  readonly allowList: AllowListAllowListStruct[] | cdktf.IResolvable;
  /**
  * The ID of the service to manage the allow list for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list#service_id AllowList#service_id}
  */
  readonly serviceId: string;
  /**
  * If true, the provider will wait for the service to be updated before returning. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list#wait_for_creation AllowList#wait_for_creation}
  */
  readonly waitForCreation?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list#timeouts AllowList#timeouts}
  */
  readonly timeouts?: AllowListTimeouts;
}
export interface AllowListAllowListStruct {
  /**
  * A comment to describe the IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list#comment AllowList#comment}
  */
  readonly comment?: string;
  /**
  * The IP address to allow access to the service. The IP must be in a valid CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list#ip AllowList#ip}
  */
  readonly ip: string;
}

export function allowListAllowListStructToTerraform(struct?: AllowListAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function allowListAllowListStructToHclTerraform(struct?: AllowListAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AllowListAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AllowListAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AllowListAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._ip = value.ip;
    }
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class AllowListAllowListStructList extends cdktf.ComplexList {
  public internalValue? : AllowListAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): AllowListAllowListStructOutputReference {
    return new AllowListAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AllowListTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list#create AllowList#create}
  */
  readonly create?: string;
}

export function allowListTimeoutsToTerraform(struct?: AllowListTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function allowListTimeoutsToHclTerraform(struct?: AllowListTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AllowListTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AllowListTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AllowListTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list skysql_allow_list}
*/
export class AllowList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "skysql_allow_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AllowList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AllowList to import
  * @param importFromId The id of the existing AllowList that should be imported. Refer to the {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AllowList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "skysql_allow_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/allow_list skysql_allow_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AllowListConfig
  */
  public constructor(scope: Construct, id: string, config: AllowListConfig) {
    super(scope, id, {
      terraformResourceType: 'skysql_allow_list',
      terraformGeneratorMetadata: {
        providerName: 'skysql',
        providerVersion: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList.internalValue = config.allowList;
    this._serviceId = config.serviceId;
    this._waitForCreation = config.waitForCreation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: false, optional: false, required: true
  private _allowList = new AllowListAllowListStructList(this, "allow_list", false);
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: AllowListAllowListStruct[] | cdktf.IResolvable) {
    this._allowList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // wait_for_creation - computed: false, optional: true, required: false
  private _waitForCreation?: boolean | cdktf.IResolvable; 
  public get waitForCreation() {
    return this.getBooleanAttribute('wait_for_creation');
  }
  public set waitForCreation(value: boolean | cdktf.IResolvable) {
    this._waitForCreation = value;
  }
  public resetWaitForCreation() {
    this._waitForCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCreationInput() {
    return this._waitForCreation;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AllowListTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AllowListTimeouts) {
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
      allow_list: cdktf.listMapper(allowListAllowListStructToTerraform, false)(this._allowList.internalValue),
      service_id: cdktf.stringToTerraform(this._serviceId),
      wait_for_creation: cdktf.booleanToTerraform(this._waitForCreation),
      timeouts: allowListTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(allowListAllowListStructToHclTerraform, false)(this._allowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AllowListAllowListStructList",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_creation: {
        value: cdktf.booleanToHclTerraform(this._waitForCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: allowListTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AllowListTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
