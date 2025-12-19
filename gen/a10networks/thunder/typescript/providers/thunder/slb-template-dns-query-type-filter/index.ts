// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsQueryTypeFilterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter#dns_name SlbTemplateDnsQueryTypeFilterA#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter#id SlbTemplateDnsQueryTypeFilterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'allow': Allow only certain DNS query types; 'deny': Deny only certain DNS query types;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter#query_type_action SlbTemplateDnsQueryTypeFilterA#query_type_action}
  */
  readonly queryTypeAction: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter#uuid SlbTemplateDnsQueryTypeFilterA#uuid}
  */
  readonly uuid?: string;
  /**
  * query_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter#query_type SlbTemplateDnsQueryTypeFilterA#query_type}
  */
  readonly queryType?: SlbTemplateDnsQueryTypeFilterQueryTypeA[] | cdktf.IResolvable;
}
export interface SlbTemplateDnsQueryTypeFilterQueryTypeA {
  /**
  * Other record type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter#num_query_type SlbTemplateDnsQueryTypeFilterA#num_query_type}
  */
  readonly numQueryType?: number;
  /**
  * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record; 'ANY': All cached record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter#str_query_type SlbTemplateDnsQueryTypeFilterA#str_query_type}
  */
  readonly strQueryType?: string;
}

export function slbTemplateDnsQueryTypeFilterQueryTypeAToTerraform(struct?: SlbTemplateDnsQueryTypeFilterQueryTypeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_query_type: cdktf.numberToTerraform(struct!.numQueryType),
    str_query_type: cdktf.stringToTerraform(struct!.strQueryType),
  }
}


export function slbTemplateDnsQueryTypeFilterQueryTypeAToHclTerraform(struct?: SlbTemplateDnsQueryTypeFilterQueryTypeA | cdktf.IResolvable): any {
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

export class SlbTemplateDnsQueryTypeFilterQueryTypeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsQueryTypeFilterQueryTypeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueryType = this._numQueryType;
    }
    if (this._strQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strQueryType = this._strQueryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsQueryTypeFilterQueryTypeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numQueryType = undefined;
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

export class SlbTemplateDnsQueryTypeFilterQueryTypeAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsQueryTypeFilterQueryTypeA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsQueryTypeFilterQueryTypeAOutputReference {
    return new SlbTemplateDnsQueryTypeFilterQueryTypeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter thunder_slb_template_dns_query_type_filter}
*/
export class SlbTemplateDnsQueryTypeFilterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_query_type_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsQueryTypeFilterA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsQueryTypeFilterA to import
  * @param importFromId The id of the existing SlbTemplateDnsQueryTypeFilterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsQueryTypeFilterA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_query_type_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_type_filter thunder_slb_template_dns_query_type_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsQueryTypeFilterAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsQueryTypeFilterAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_query_type_filter',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._queryTypeAction = config.queryTypeAction;
    this._uuid = config.uuid;
    this._queryType.internalValue = config.queryType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // query_type_action - computed: false, optional: false, required: true
  private _queryTypeAction?: string; 
  public get queryTypeAction() {
    return this.getStringAttribute('query_type_action');
  }
  public set queryTypeAction(value: string) {
    this._queryTypeAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeActionInput() {
    return this._queryTypeAction;
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
  private _queryType = new SlbTemplateDnsQueryTypeFilterQueryTypeAList(this, "query_type", false);
  public get queryType() {
    return this._queryType;
  }
  public putQueryType(value: SlbTemplateDnsQueryTypeFilterQueryTypeA[] | cdktf.IResolvable) {
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
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      query_type_action: cdktf.stringToTerraform(this._queryTypeAction),
      uuid: cdktf.stringToTerraform(this._uuid),
      query_type: cdktf.listMapper(slbTemplateDnsQueryTypeFilterQueryTypeAToTerraform, true)(this._queryType.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      query_type_action: {
        value: cdktf.stringToHclTerraform(this._queryTypeAction),
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
        value: cdktf.listMapperHcl(slbTemplateDnsQueryTypeFilterQueryTypeAToHclTerraform, true)(this._queryType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsQueryTypeFilterQueryTypeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
