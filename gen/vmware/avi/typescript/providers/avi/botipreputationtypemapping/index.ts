// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotipreputationtypemappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#id Botipreputationtypemapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#name Botipreputationtypemapping#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#tenant_ref Botipreputationtypemapping#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#uuid Botipreputationtypemapping#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_reputation_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#ip_reputation_mappings Botipreputationtypemapping#ip_reputation_mappings}
  */
  readonly ipReputationMappings?: BotipreputationtypemappingIpReputationMappings[] | cdktf.IResolvable;
}
export interface BotipreputationtypemappingIpReputationMappingsBotIdentification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#class Botipreputationtypemapping#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#identifier Botipreputationtypemapping#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#type Botipreputationtypemapping#type}
  */
  readonly type?: string;
}

export function botipreputationtypemappingIpReputationMappingsBotIdentificationToTerraform(struct?: BotipreputationtypemappingIpReputationMappingsBotIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botipreputationtypemappingIpReputationMappingsBotIdentificationToHclTerraform(struct?: BotipreputationtypemappingIpReputationMappingsBotIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotipreputationtypemappingIpReputationMappingsBotIdentificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotipreputationtypemappingIpReputationMappingsBotIdentification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotipreputationtypemappingIpReputationMappingsBotIdentification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._identifier = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._identifier = value.identifier;
      this._type = value.type;
    }
  }

  // class - computed: true, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotipreputationtypemappingIpReputationMappingsBotIdentificationList extends cdktf.ComplexList {
  public internalValue? : BotipreputationtypemappingIpReputationMappingsBotIdentification[] | cdktf.IResolvable

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
  public get(index: number): BotipreputationtypemappingIpReputationMappingsBotIdentificationOutputReference {
    return new BotipreputationtypemappingIpReputationMappingsBotIdentificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotipreputationtypemappingIpReputationMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#ip_reputation_type Botipreputationtypemapping#ip_reputation_type}
  */
  readonly ipReputationType: string;
  /**
  * bot_identification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#bot_identification Botipreputationtypemapping#bot_identification}
  */
  readonly botIdentification: BotipreputationtypemappingIpReputationMappingsBotIdentification[] | cdktf.IResolvable;
}

export function botipreputationtypemappingIpReputationMappingsToTerraform(struct?: BotipreputationtypemappingIpReputationMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_reputation_type: cdktf.stringToTerraform(struct!.ipReputationType),
    bot_identification: cdktf.listMapper(botipreputationtypemappingIpReputationMappingsBotIdentificationToTerraform, true)(struct!.botIdentification),
  }
}


export function botipreputationtypemappingIpReputationMappingsToHclTerraform(struct?: BotipreputationtypemappingIpReputationMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_reputation_type: {
      value: cdktf.stringToHclTerraform(struct!.ipReputationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bot_identification: {
      value: cdktf.listMapperHcl(botipreputationtypemappingIpReputationMappingsBotIdentificationToHclTerraform, true)(struct!.botIdentification),
      isBlock: true,
      type: "set",
      storageClassType: "BotipreputationtypemappingIpReputationMappingsBotIdentificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotipreputationtypemappingIpReputationMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotipreputationtypemappingIpReputationMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipReputationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationType = this._ipReputationType;
    }
    if (this._botIdentification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botIdentification = this._botIdentification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotipreputationtypemappingIpReputationMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipReputationType = undefined;
      this._botIdentification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipReputationType = value.ipReputationType;
      this._botIdentification.internalValue = value.botIdentification;
    }
  }

  // ip_reputation_type - computed: false, optional: false, required: true
  private _ipReputationType?: string; 
  public get ipReputationType() {
    return this.getStringAttribute('ip_reputation_type');
  }
  public set ipReputationType(value: string) {
    this._ipReputationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationTypeInput() {
    return this._ipReputationType;
  }

  // bot_identification - computed: false, optional: false, required: true
  private _botIdentification = new BotipreputationtypemappingIpReputationMappingsBotIdentificationList(this, "bot_identification", true);
  public get botIdentification() {
    return this._botIdentification;
  }
  public putBotIdentification(value: BotipreputationtypemappingIpReputationMappingsBotIdentification[] | cdktf.IResolvable) {
    this._botIdentification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botIdentificationInput() {
    return this._botIdentification.internalValue;
  }
}

export class BotipreputationtypemappingIpReputationMappingsList extends cdktf.ComplexList {
  public internalValue? : BotipreputationtypemappingIpReputationMappings[] | cdktf.IResolvable

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
  public get(index: number): BotipreputationtypemappingIpReputationMappingsOutputReference {
    return new BotipreputationtypemappingIpReputationMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping avi_botipreputationtypemapping}
*/
export class Botipreputationtypemapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_botipreputationtypemapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Botipreputationtypemapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Botipreputationtypemapping to import
  * @param importFromId The id of the existing Botipreputationtypemapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Botipreputationtypemapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_botipreputationtypemapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/botipreputationtypemapping avi_botipreputationtypemapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotipreputationtypemappingConfig
  */
  public constructor(scope: Construct, id: string, config: BotipreputationtypemappingConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_botipreputationtypemapping',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
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
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._ipReputationMappings.internalValue = config.ipReputationMappings;
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // ip_reputation_mappings - computed: false, optional: true, required: false
  private _ipReputationMappings = new BotipreputationtypemappingIpReputationMappingsList(this, "ip_reputation_mappings", false);
  public get ipReputationMappings() {
    return this._ipReputationMappings;
  }
  public putIpReputationMappings(value: BotipreputationtypemappingIpReputationMappings[] | cdktf.IResolvable) {
    this._ipReputationMappings.internalValue = value;
  }
  public resetIpReputationMappings() {
    this._ipReputationMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationMappingsInput() {
    return this._ipReputationMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip_reputation_mappings: cdktf.listMapper(botipreputationtypemappingIpReputationMappingsToTerraform, true)(this._ipReputationMappings.internalValue),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
      ip_reputation_mappings: {
        value: cdktf.listMapperHcl(botipreputationtypemappingIpReputationMappingsToHclTerraform, true)(this._ipReputationMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BotipreputationtypemappingIpReputationMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
