// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsRecursiveDnsResolutionLookupOrderAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order#id SlbTemplateDnsRecursiveDnsResolutionLookupOrderA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order#name SlbTemplateDnsRecursiveDnsResolutionLookupOrderA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order#uuid SlbTemplateDnsRecursiveDnsResolutionLookupOrderA#uuid}
  */
  readonly uuid?: string;
  /**
  * query_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order#query_type SlbTemplateDnsRecursiveDnsResolutionLookupOrderA#query_type}
  */
  readonly queryType?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA[] | cdktf.IResolvable;
}
export interface SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA {
  /**
  * Other query type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order#num_query_type SlbTemplateDnsRecursiveDnsResolutionLookupOrderA#num_query_type}
  */
  readonly numQueryType?: number;
  /**
  * 'ipv4-precede-ipv6': Recursive lookup via IPv4 then IPv6; 'ipv6-precede-ipv4': Recursive lookup via IPv6 then IPv4;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order#order SlbTemplateDnsRecursiveDnsResolutionLookupOrderA#order}
  */
  readonly order?: string;
  /**
  * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record; 'ANY': All cached record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order#str_query_type SlbTemplateDnsRecursiveDnsResolutionLookupOrderA#str_query_type}
  */
  readonly strQueryType?: string;
}

export function slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_query_type: cdktf.numberToTerraform(struct!.numQueryType),
    order: cdktf.stringToTerraform(struct!.order),
    str_query_type: cdktf.stringToTerraform(struct!.strQueryType),
  }
}


export function slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_query_type: {
      value: cdktf.numberToHclTerraform(struct!.numQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_query_type: {
      value: cdktf.stringToHclTerraform(struct!.strQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueryType = this._numQueryType;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._strQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strQueryType = this._strQueryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numQueryType = undefined;
      this._order = undefined;
      this._strQueryType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numQueryType = value.numQueryType;
      this._order = value.order;
      this._strQueryType = value.strQueryType;
    }
  }

  // num_query_type - computed: false, optional: true, required: false
  private _numQueryType?: number; 
  public get numQueryType() {
    return this.getNumberAttribute('num_query_type');
  }
  public set numQueryType(value: number) {
    this._numQueryType = value;
  }
  public resetNumQueryType() {
    this._numQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueryTypeInput() {
    return this._numQueryType;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // str_query_type - computed: false, optional: true, required: false
  private _strQueryType?: string; 
  public get strQueryType() {
    return this.getStringAttribute('str_query_type');
  }
  public set strQueryType(value: string) {
    this._strQueryType = value;
  }
  public resetStrQueryType() {
    this._strQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strQueryTypeInput() {
    return this._strQueryType;
  }
}

export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAOutputReference {
    return new SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order thunder_slb_template_dns_recursive_dns_resolution_lookup_order}
*/
export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_recursive_dns_resolution_lookup_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsRecursiveDnsResolutionLookupOrderA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsRecursiveDnsResolutionLookupOrderA to import
  * @param importFromId The id of the existing SlbTemplateDnsRecursiveDnsResolutionLookupOrderA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsRecursiveDnsResolutionLookupOrderA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_recursive_dns_resolution_lookup_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution_lookup_order thunder_slb_template_dns_recursive_dns_resolution_lookup_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsRecursiveDnsResolutionLookupOrderAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsRecursiveDnsResolutionLookupOrderAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_recursive_dns_resolution_lookup_order',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._uuid = config.uuid;
    this._queryType.internalValue = config.queryType;
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

  // uuid - computed: true, optional: true, required: false
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

  // query_type - computed: false, optional: true, required: false
  private _queryType = new SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAList(this, "query_type", false);
  public get queryType() {
    return this._queryType;
  }
  public putQueryType(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA[] | cdktf.IResolvable) {
    this._queryType.internalValue = value;
  }
  public resetQueryType() {
    this._queryType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      query_type: cdktf.listMapper(slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAToTerraform, true)(this._queryType.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_type: {
        value: cdktf.listMapperHcl(slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAToHclTerraform, true)(this._queryType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
