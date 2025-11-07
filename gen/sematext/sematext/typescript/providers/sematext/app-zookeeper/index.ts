// https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppZookeeperConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Required) Plan ID attached to the monitor app in Sematext Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper#billing_plan_id AppZookeeper#billing_plan_id}
  */
  readonly billingPlanId: number;
  /**
  * (Optional) Iniitial discount code attached to the monitor app in Sematext Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper#discount_code AppZookeeper#discount_code}
  */
  readonly discountCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper#id AppZookeeper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Required) Label for the monitor app in Sematext Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper#name AppZookeeper#name}
  */
  readonly name: string;
  /**
  * apptoken block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper#apptoken AppZookeeper#apptoken}
  */
  readonly apptoken: AppZookeeperApptoken[] | cdktf.IResolvable;
}
export interface AppZookeeperApptoken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper#names AppZookeeper#names}
  */
  readonly names: string[];
}

export function appZookeeperApptokenToTerraform(struct?: AppZookeeperApptoken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function appZookeeperApptokenToHclTerraform(struct?: AppZookeeperApptoken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppZookeeperApptokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppZookeeperApptoken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppZookeeperApptoken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

export class AppZookeeperApptokenList extends cdktf.ComplexList {
  public internalValue? : AppZookeeperApptoken[] | cdktf.IResolvable

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
  public get(index: number): AppZookeeperApptokenOutputReference {
    return new AppZookeeperApptokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper sematext_app_zookeeper}
*/
export class AppZookeeper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sematext_app_zookeeper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppZookeeper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppZookeeper to import
  * @param importFromId The id of the existing AppZookeeper that should be imported. Refer to the {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppZookeeper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sematext_app_zookeeper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs/resources/app_zookeeper sematext_app_zookeeper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppZookeeperConfig
  */
  public constructor(scope: Construct, id: string, config: AppZookeeperConfig) {
    super(scope, id, {
      terraformResourceType: 'sematext_app_zookeeper',
      terraformGeneratorMetadata: {
        providerName: 'sematext',
        providerVersion: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingPlanId = config.billingPlanId;
    this._discountCode = config.discountCode;
    this._id = config.id;
    this._name = config.name;
    this._apptoken.internalValue = config.apptoken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_plan_id - computed: false, optional: false, required: true
  private _billingPlanId?: number; 
  public get billingPlanId() {
    return this.getNumberAttribute('billing_plan_id');
  }
  public set billingPlanId(value: number) {
    this._billingPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPlanIdInput() {
    return this._billingPlanId;
  }

  // discount_code - computed: false, optional: true, required: false
  private _discountCode?: string; 
  public get discountCode() {
    return this.getStringAttribute('discount_code');
  }
  public set discountCode(value: string) {
    this._discountCode = value;
  }
  public resetDiscountCode() {
    this._discountCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discountCodeInput() {
    return this._discountCode;
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

  // sc_apptoken_entries - computed: true, optional: false, required: false
  private _scApptokenEntries = new cdktf.StringMap(this, "sc_apptoken_entries");
  public get scApptokenEntries() {
    return this._scApptokenEntries;
  }

  // apptoken - computed: false, optional: false, required: true
  private _apptoken = new AppZookeeperApptokenList(this, "apptoken", true);
  public get apptoken() {
    return this._apptoken;
  }
  public putApptoken(value: AppZookeeperApptoken[] | cdktf.IResolvable) {
    this._apptoken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apptokenInput() {
    return this._apptoken.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_plan_id: cdktf.numberToTerraform(this._billingPlanId),
      discount_code: cdktf.stringToTerraform(this._discountCode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      apptoken: cdktf.listMapper(appZookeeperApptokenToTerraform, true)(this._apptoken.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_plan_id: {
        value: cdktf.numberToHclTerraform(this._billingPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      discount_code: {
        value: cdktf.stringToHclTerraform(this._discountCode),
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
      apptoken: {
        value: cdktf.listMapperHcl(appZookeeperApptokenToHclTerraform, true)(this._apptoken.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppZookeeperApptokenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
