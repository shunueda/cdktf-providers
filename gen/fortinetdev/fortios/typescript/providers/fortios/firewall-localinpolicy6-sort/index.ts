// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallLocalinpolicy6SortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#comment FirewallLocalinpolicy6Sort#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#force_recreate FirewallLocalinpolicy6Sort#force_recreate}
  */
  readonly forceRecreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#id FirewallLocalinpolicy6Sort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#manual_order FirewallLocalinpolicy6Sort#manual_order}
  */
  readonly manualOrder?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#sortby FirewallLocalinpolicy6Sort#sortby}
  */
  readonly sortby: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#sortdirection FirewallLocalinpolicy6Sort#sortdirection}
  */
  readonly sortdirection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#status FirewallLocalinpolicy6Sort#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#vdomparam FirewallLocalinpolicy6Sort#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface FirewallLocalinpolicy6SortStatePolicyListStruct {
}

export function firewallLocalinpolicy6SortStatePolicyListStructToTerraform(struct?: FirewallLocalinpolicy6SortStatePolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firewallLocalinpolicy6SortStatePolicyListStructToHclTerraform(struct?: FirewallLocalinpolicy6SortStatePolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirewallLocalinpolicy6SortStatePolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicy6SortStatePolicyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallLocalinpolicy6SortStatePolicyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // policyid - computed: true, optional: false, required: false
  public get policyid() {
    return this.getStringAttribute('policyid');
  }
}

export class FirewallLocalinpolicy6SortStatePolicyListStructList extends cdktf.ComplexList {

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
  public get(index: number): FirewallLocalinpolicy6SortStatePolicyListStructOutputReference {
    return new FirewallLocalinpolicy6SortStatePolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort fortios_firewall_localinpolicy6_sort}
*/
export class FirewallLocalinpolicy6Sort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_localinpolicy6_sort";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallLocalinpolicy6Sort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallLocalinpolicy6Sort to import
  * @param importFromId The id of the existing FirewallLocalinpolicy6Sort that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallLocalinpolicy6Sort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_localinpolicy6_sort", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy6_sort fortios_firewall_localinpolicy6_sort} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallLocalinpolicy6SortConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallLocalinpolicy6SortConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_localinpolicy6_sort',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._forceRecreate = config.forceRecreate;
    this._id = config.id;
    this._manualOrder = config.manualOrder;
    this._sortby = config.sortby;
    this._sortdirection = config.sortdirection;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // force_recreate - computed: true, optional: true, required: false
  private _forceRecreate?: string; 
  public get forceRecreate() {
    return this.getStringAttribute('force_recreate');
  }
  public set forceRecreate(value: string) {
    this._forceRecreate = value;
  }
  public resetForceRecreate() {
    this._forceRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateInput() {
    return this._forceRecreate;
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

  // manual_order - computed: true, optional: true, required: false
  private _manualOrder?: string[]; 
  public get manualOrder() {
    return this.getListAttribute('manual_order');
  }
  public set manualOrder(value: string[]) {
    this._manualOrder = value;
  }
  public resetManualOrder() {
    this._manualOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualOrderInput() {
    return this._manualOrder;
  }

  // sortby - computed: false, optional: false, required: true
  private _sortby?: string; 
  public get sortby() {
    return this.getStringAttribute('sortby');
  }
  public set sortby(value: string) {
    this._sortby = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortbyInput() {
    return this._sortby;
  }

  // sortdirection - computed: false, optional: false, required: true
  private _sortdirection?: string; 
  public get sortdirection() {
    return this.getStringAttribute('sortdirection');
  }
  public set sortdirection(value: string) {
    this._sortdirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortdirectionInput() {
    return this._sortdirection;
  }

  // state_policy_list - computed: true, optional: false, required: false
  private _statePolicyList = new FirewallLocalinpolicy6SortStatePolicyListStructList(this, "state_policy_list", false);
  public get statePolicyList() {
    return this._statePolicyList;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      force_recreate: cdktf.stringToTerraform(this._forceRecreate),
      id: cdktf.stringToTerraform(this._id),
      manual_order: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manualOrder),
      sortby: cdktf.stringToTerraform(this._sortby),
      sortdirection: cdktf.stringToTerraform(this._sortdirection),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_recreate: {
        value: cdktf.stringToHclTerraform(this._forceRecreate),
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
      manual_order: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manualOrder),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sortby: {
        value: cdktf.stringToHclTerraform(this._sortby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sortdirection: {
        value: cdktf.stringToHclTerraform(this._sortdirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
