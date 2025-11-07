// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#id Acl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#name Acl#name}
  */
  readonly name: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#rule Acl#rule}
  */
  readonly rule: AclRule[] | cdktf.IResolvable;
}
export interface AclRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#active Acl#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#destination Acl#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#destination_service Acl#destination_service}
  */
  readonly destinationService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#log_interval Acl#log_interval}
  */
  readonly logInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#log_status Acl#log_status}
  */
  readonly logStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#permit Acl#permit}
  */
  readonly permit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#remarks Acl#remarks}
  */
  readonly remarks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#source Acl#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#source_service Acl#source_service}
  */
  readonly sourceService?: string;
}

export function aclRuleToTerraform(struct?: AclRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_service: cdktf.stringToTerraform(struct!.destinationService),
    log_interval: cdktf.numberToTerraform(struct!.logInterval),
    log_status: cdktf.stringToTerraform(struct!.logStatus),
    permit: cdktf.booleanToTerraform(struct!.permit),
    remarks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remarks),
    source: cdktf.stringToTerraform(struct!.source),
    source_service: cdktf.stringToTerraform(struct!.sourceService),
  }
}


export function aclRuleToHclTerraform(struct?: AclRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_service: {
      value: cdktf.stringToHclTerraform(struct!.destinationService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_interval: {
      value: cdktf.numberToHclTerraform(struct!.logInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_status: {
      value: cdktf.stringToHclTerraform(struct!.logStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit: {
      value: cdktf.booleanToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remarks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remarks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service: {
      value: cdktf.stringToHclTerraform(struct!.sourceService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AclRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AclRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationService !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationService = this._destinationService;
    }
    if (this._logInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInterval = this._logInterval;
    }
    if (this._logStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStatus = this._logStatus;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    if (this._remarks !== undefined) {
      hasAnyValues = true;
      internalValueResult.remarks = this._remarks;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceService !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceService = this._sourceService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._destination = undefined;
      this._destinationService = undefined;
      this._logInterval = undefined;
      this._logStatus = undefined;
      this._permit = undefined;
      this._remarks = undefined;
      this._source = undefined;
      this._sourceService = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._destination = value.destination;
      this._destinationService = value.destinationService;
      this._logInterval = value.logInterval;
      this._logStatus = value.logStatus;
      this._permit = value.permit;
      this._remarks = value.remarks;
      this._source = value.source;
      this._sourceService = value.sourceService;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_service - computed: false, optional: false, required: true
  private _destinationService?: string; 
  public get destinationService() {
    return this.getStringAttribute('destination_service');
  }
  public set destinationService(value: string) {
    this._destinationService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationServiceInput() {
    return this._destinationService;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_interval - computed: false, optional: true, required: false
  private _logInterval?: number; 
  public get logInterval() {
    return this.getNumberAttribute('log_interval');
  }
  public set logInterval(value: number) {
    this._logInterval = value;
  }
  public resetLogInterval() {
    this._logInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalInput() {
    return this._logInterval;
  }

  // log_status - computed: false, optional: true, required: false
  private _logStatus?: string; 
  public get logStatus() {
    return this.getStringAttribute('log_status');
  }
  public set logStatus(value: string) {
    this._logStatus = value;
  }
  public resetLogStatus() {
    this._logStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatusInput() {
    return this._logStatus;
  }

  // permit - computed: false, optional: true, required: false
  private _permit?: boolean | cdktf.IResolvable; 
  public get permit() {
    return this.getBooleanAttribute('permit');
  }
  public set permit(value: boolean | cdktf.IResolvable) {
    this._permit = value;
  }
  public resetPermit() {
    this._permit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }

  // remarks - computed: false, optional: true, required: false
  private _remarks?: string[]; 
  public get remarks() {
    return this.getListAttribute('remarks');
  }
  public set remarks(value: string[]) {
    this._remarks = value;
  }
  public resetRemarks() {
    this._remarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarksInput() {
    return this._remarks;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_service - computed: false, optional: true, required: false
  private _sourceService?: string; 
  public get sourceService() {
    return this.getStringAttribute('source_service');
  }
  public set sourceService(value: string) {
    this._sourceService = value;
  }
  public resetSourceService() {
    this._sourceService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceInput() {
    return this._sourceService;
  }
}

export class AclRuleList extends cdktf.ComplexList {
  public internalValue? : AclRule[] | cdktf.IResolvable

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
  public get(index: number): AclRuleOutputReference {
    return new AclRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl ciscoasa_acl}
*/
export class Acl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Acl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Acl to import
  * @param importFromId The id of the existing Acl that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Acl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/acl ciscoasa_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclConfig
  */
  public constructor(scope: Construct, id: string, config: AclConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_acl',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0'
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
    this._rule.internalValue = config.rule;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new AclRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AclRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rule: cdktf.listMapper(aclRuleToTerraform, true)(this._rule.internalValue),
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
      rule: {
        value: cdktf.listMapperHcl(aclRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AclRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
