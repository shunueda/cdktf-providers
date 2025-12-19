// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsRpzLoggingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging#dns_name SlbTemplateDnsRpzLoggingA#dns_name}
  */
  readonly dnsName: string;
  /**
  * Log RPZ triggered action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging#enable SlbTemplateDnsRpzLoggingA#enable}
  */
  readonly enable: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging#id SlbTemplateDnsRpzLoggingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SeqId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging#seq_id SlbTemplateDnsRpzLoggingA#seq_id}
  */
  readonly seqId: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging#uuid SlbTemplateDnsRpzLoggingA#uuid}
  */
  readonly uuid?: string;
  /**
  * rpz_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging#rpz_action SlbTemplateDnsRpzLoggingA#rpz_action}
  */
  readonly rpzAction?: SlbTemplateDnsRpzLoggingRpzActionA[] | cdktf.IResolvable;
}
export interface SlbTemplateDnsRpzLoggingRpzActionA {
  /**
  * 'drop': Log RPZ due to drop action; 'pass-thru': Log RPZ due to pass-thru action; 'nxdomain': Log RPZ due to nxdomain action; 'nodata': Log RPZ due to nodata action; 'tcp-only': Log RPZ due to tcp-only action; 'local-data': Log RPZ due to local-data action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging#str_rpz_action SlbTemplateDnsRpzLoggingA#str_rpz_action}
  */
  readonly strRpzAction?: string;
}

export function slbTemplateDnsRpzLoggingRpzActionAToTerraform(struct?: SlbTemplateDnsRpzLoggingRpzActionA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    str_rpz_action: cdktf.stringToTerraform(struct!.strRpzAction),
  }
}


export function slbTemplateDnsRpzLoggingRpzActionAToHclTerraform(struct?: SlbTemplateDnsRpzLoggingRpzActionA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    str_rpz_action: {
      value: cdktf.stringToHclTerraform(struct!.strRpzAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRpzLoggingRpzActionAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsRpzLoggingRpzActionA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strRpzAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.strRpzAction = this._strRpzAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRpzLoggingRpzActionA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._strRpzAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._strRpzAction = value.strRpzAction;
    }
  }

  // str_rpz_action - computed: false, optional: true, required: false
  private _strRpzAction?: string; 
  public get strRpzAction() {
    return this.getStringAttribute('str_rpz_action');
  }
  public set strRpzAction(value: string) {
    this._strRpzAction = value;
  }
  public resetStrRpzAction() {
    this._strRpzAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strRpzActionInput() {
    return this._strRpzAction;
  }
}

export class SlbTemplateDnsRpzLoggingRpzActionAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRpzLoggingRpzActionA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsRpzLoggingRpzActionAOutputReference {
    return new SlbTemplateDnsRpzLoggingRpzActionAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging thunder_slb_template_dns_rpz_logging}
*/
export class SlbTemplateDnsRpzLoggingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_rpz_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsRpzLoggingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsRpzLoggingA to import
  * @param importFromId The id of the existing SlbTemplateDnsRpzLoggingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsRpzLoggingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_rpz_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz_logging thunder_slb_template_dns_rpz_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsRpzLoggingAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsRpzLoggingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_rpz_logging',
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
    this._enable = config.enable;
    this._id = config.id;
    this._seqId = config.seqId;
    this._uuid = config.uuid;
    this._rpzAction.internalValue = config.rpzAction;
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

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // seq_id - computed: false, optional: false, required: true
  private _seqId?: string; 
  public get seqId() {
    return this.getStringAttribute('seq_id');
  }
  public set seqId(value: string) {
    this._seqId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqIdInput() {
    return this._seqId;
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

  // rpz_action - computed: false, optional: true, required: false
  private _rpzAction = new SlbTemplateDnsRpzLoggingRpzActionAList(this, "rpz_action", false);
  public get rpzAction() {
    return this._rpzAction;
  }
  public putRpzAction(value: SlbTemplateDnsRpzLoggingRpzActionA[] | cdktf.IResolvable) {
    this._rpzAction.internalValue = value;
  }
  public resetRpzAction() {
    this._rpzAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionInput() {
    return this._rpzAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      seq_id: cdktf.stringToTerraform(this._seqId),
      uuid: cdktf.stringToTerraform(this._uuid),
      rpz_action: cdktf.listMapper(slbTemplateDnsRpzLoggingRpzActionAToTerraform, true)(this._rpzAction.internalValue),
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
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seq_id: {
        value: cdktf.stringToHclTerraform(this._seqId),
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
      rpz_action: {
        value: cdktf.listMapperHcl(slbTemplateDnsRpzLoggingRpzActionAToHclTerraform, true)(this._rpzAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsRpzLoggingRpzActionAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
