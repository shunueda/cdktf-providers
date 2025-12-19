// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsQueryClassFilterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter#dns_name SlbTemplateDnsQueryClassFilterA#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter#id SlbTemplateDnsQueryClassFilterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'allow': Allow only certain DNS query classes; 'deny': Deny only certain DNS query classes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter#query_class_action SlbTemplateDnsQueryClassFilterA#query_class_action}
  */
  readonly queryClassAction: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter#uuid SlbTemplateDnsQueryClassFilterA#uuid}
  */
  readonly uuid?: string;
  /**
  * query_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter#query_class SlbTemplateDnsQueryClassFilterA#query_class}
  */
  readonly queryClass?: SlbTemplateDnsQueryClassFilterQueryClassA[] | cdktf.IResolvable;
}
export interface SlbTemplateDnsQueryClassFilterQueryClassA {
  /**
  * Other query class value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter#num_query_class SlbTemplateDnsQueryClassFilterA#num_query_class}
  */
  readonly numQueryClass?: number;
  /**
  * 'INTERNET': INTERNET query class; 'CHAOS': CHAOS query class; 'HESIOD': HESIOD query class; 'NONE': NONE query class; 'ANY': ANY query class;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter#str_query_class SlbTemplateDnsQueryClassFilterA#str_query_class}
  */
  readonly strQueryClass?: string;
}

export function slbTemplateDnsQueryClassFilterQueryClassAToTerraform(struct?: SlbTemplateDnsQueryClassFilterQueryClassA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_query_class: cdktf.numberToTerraform(struct!.numQueryClass),
    str_query_class: cdktf.stringToTerraform(struct!.strQueryClass),
  }
}


export function slbTemplateDnsQueryClassFilterQueryClassAToHclTerraform(struct?: SlbTemplateDnsQueryClassFilterQueryClassA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_query_class: {
      value: cdktf.numberToHclTerraform(struct!.numQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_query_class: {
      value: cdktf.stringToHclTerraform(struct!.strQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsQueryClassFilterQueryClassAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsQueryClassFilterQueryClassA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueryClass = this._numQueryClass;
    }
    if (this._strQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.strQueryClass = this._strQueryClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsQueryClassFilterQueryClassA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numQueryClass = undefined;
      this._strQueryClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numQueryClass = value.numQueryClass;
      this._strQueryClass = value.strQueryClass;
    }
  }

  // num_query_class - computed: false, optional: true, required: false
  private _numQueryClass?: number; 
  public get numQueryClass() {
    return this.getNumberAttribute('num_query_class');
  }
  public set numQueryClass(value: number) {
    this._numQueryClass = value;
  }
  public resetNumQueryClass() {
    this._numQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueryClassInput() {
    return this._numQueryClass;
  }

  // str_query_class - computed: false, optional: true, required: false
  private _strQueryClass?: string; 
  public get strQueryClass() {
    return this.getStringAttribute('str_query_class');
  }
  public set strQueryClass(value: string) {
    this._strQueryClass = value;
  }
  public resetStrQueryClass() {
    this._strQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strQueryClassInput() {
    return this._strQueryClass;
  }
}

export class SlbTemplateDnsQueryClassFilterQueryClassAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsQueryClassFilterQueryClassA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsQueryClassFilterQueryClassAOutputReference {
    return new SlbTemplateDnsQueryClassFilterQueryClassAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter thunder_slb_template_dns_query_class_filter}
*/
export class SlbTemplateDnsQueryClassFilterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_query_class_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsQueryClassFilterA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsQueryClassFilterA to import
  * @param importFromId The id of the existing SlbTemplateDnsQueryClassFilterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsQueryClassFilterA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_query_class_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_query_class_filter thunder_slb_template_dns_query_class_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsQueryClassFilterAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsQueryClassFilterAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_query_class_filter',
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
    this._queryClassAction = config.queryClassAction;
    this._uuid = config.uuid;
    this._queryClass.internalValue = config.queryClass;
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

  // query_class_action - computed: false, optional: false, required: true
  private _queryClassAction?: string; 
  public get queryClassAction() {
    return this.getStringAttribute('query_class_action');
  }
  public set queryClassAction(value: string) {
    this._queryClassAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryClassActionInput() {
    return this._queryClassAction;
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

  // query_class - computed: false, optional: true, required: false
  private _queryClass = new SlbTemplateDnsQueryClassFilterQueryClassAList(this, "query_class", false);
  public get queryClass() {
    return this._queryClass;
  }
  public putQueryClass(value: SlbTemplateDnsQueryClassFilterQueryClassA[] | cdktf.IResolvable) {
    this._queryClass.internalValue = value;
  }
  public resetQueryClass() {
    this._queryClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryClassInput() {
    return this._queryClass.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      query_class_action: cdktf.stringToTerraform(this._queryClassAction),
      uuid: cdktf.stringToTerraform(this._uuid),
      query_class: cdktf.listMapper(slbTemplateDnsQueryClassFilterQueryClassAToTerraform, true)(this._queryClass.internalValue),
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
      query_class_action: {
        value: cdktf.stringToHclTerraform(this._queryClassAction),
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
      query_class: {
        value: cdktf.listMapperHcl(slbTemplateDnsQueryClassFilterQueryClassAToHclTerraform, true)(this._queryClass.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsQueryClassFilterQueryClassAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
