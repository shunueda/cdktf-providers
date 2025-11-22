// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/ip_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoralogixIpAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the company IP access settings. This is typically a company ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/ip_access#id DataCoralogixIpAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCoralogixIpAccessIpAccess {
}

export function dataCoralogixIpAccessIpAccessToTerraform(struct?: DataCoralogixIpAccessIpAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixIpAccessIpAccessToHclTerraform(struct?: DataCoralogixIpAccessIpAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixIpAccessIpAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixIpAccessIpAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixIpAccessIpAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ip_range - computed: true, optional: false, required: false
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCoralogixIpAccessIpAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixIpAccessIpAccessOutputReference {
    return new DataCoralogixIpAccessIpAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/ip_access coralogix_ip_access}
*/
export class DataCoralogixIpAccess extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_ip_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoralogixIpAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoralogixIpAccess to import
  * @param importFromId The id of the existing DataCoralogixIpAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/ip_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoralogixIpAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_ip_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/ip_access coralogix_ip_access} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoralogixIpAccessConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoralogixIpAccessConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix_ip_access',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_coralogix_customer_support_access - computed: true, optional: false, required: false
  public get enableCoralogixCustomerSupportAccess() {
    return this.getStringAttribute('enable_coralogix_customer_support_access');
  }

  // id - computed: false, optional: true, required: false
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

  // ip_access - computed: true, optional: false, required: false
  private _ipAccess = new DataCoralogixIpAccessIpAccessList(this, "ip_access", true);
  public get ipAccess() {
    return this._ipAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
