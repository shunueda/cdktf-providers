// https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#id Delivery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#published_hostname Delivery#published_hostname}
  */
  readonly publishedHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#published_path Delivery#published_path}
  */
  readonly publishedPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#service_profile Delivery#service_profile}
  */
  readonly serviceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#shortname Delivery#shortname}
  */
  readonly shortname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#source_hostname Delivery#source_hostname}
  */
  readonly sourceHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#source_path Delivery#source_path}
  */
  readonly sourcePath: string;
  /**
  * protocol_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#protocol_set Delivery#protocol_set}
  */
  readonly protocolSet: DeliveryProtocolSet[] | cdktf.IResolvable;
}
export interface DeliveryProtocolSetOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#name Delivery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#parameters Delivery#parameters}
  */
  readonly parameters?: string[];
}

export function deliveryProtocolSetOptionToTerraform(struct?: DeliveryProtocolSetOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
  }
}


export function deliveryProtocolSetOptionToHclTerraform(struct?: DeliveryProtocolSetOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryProtocolSetOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryProtocolSetOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryProtocolSetOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}

export class DeliveryProtocolSetOptionList extends cdktf.ComplexList {
  public internalValue? : DeliveryProtocolSetOption[] | cdktf.IResolvable

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
  public get(index: number): DeliveryProtocolSetOptionOutputReference {
    return new DeliveryProtocolSetOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryProtocolSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#published_protocol Delivery#published_protocol}
  */
  readonly publishedProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#source_port Delivery#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#source_protocol Delivery#source_protocol}
  */
  readonly sourceProtocol: string;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#option Delivery#option}
  */
  readonly option?: DeliveryProtocolSetOption[] | cdktf.IResolvable;
}

export function deliveryProtocolSetToTerraform(struct?: DeliveryProtocolSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    published_protocol: cdktf.stringToTerraform(struct!.publishedProtocol),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_protocol: cdktf.stringToTerraform(struct!.sourceProtocol),
    option: cdktf.listMapper(deliveryProtocolSetOptionToTerraform, true)(struct!.option),
  }
}


export function deliveryProtocolSetToHclTerraform(struct?: DeliveryProtocolSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    published_protocol: {
      value: cdktf.stringToHclTerraform(struct!.publishedProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_protocol: {
      value: cdktf.stringToHclTerraform(struct!.sourceProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.listMapperHcl(deliveryProtocolSetOptionToHclTerraform, true)(struct!.option),
      isBlock: true,
      type: "list",
      storageClassType: "DeliveryProtocolSetOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryProtocolSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryProtocolSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishedProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishedProtocol = this._publishedProtocol;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProtocol = this._sourceProtocol;
    }
    if (this._option?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryProtocolSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publishedProtocol = undefined;
      this._sourcePort = undefined;
      this._sourceProtocol = undefined;
      this._option.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publishedProtocol = value.publishedProtocol;
      this._sourcePort = value.sourcePort;
      this._sourceProtocol = value.sourceProtocol;
      this._option.internalValue = value.option;
    }
  }

  // published_protocol - computed: false, optional: false, required: true
  private _publishedProtocol?: string; 
  public get publishedProtocol() {
    return this.getStringAttribute('published_protocol');
  }
  public set publishedProtocol(value: string) {
    this._publishedProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedProtocolInput() {
    return this._publishedProtocol;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_protocol - computed: false, optional: false, required: true
  private _sourceProtocol?: string; 
  public get sourceProtocol() {
    return this.getStringAttribute('source_protocol');
  }
  public set sourceProtocol(value: string) {
    this._sourceProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProtocolInput() {
    return this._sourceProtocol;
  }

  // option - computed: false, optional: true, required: false
  private _option = new DeliveryProtocolSetOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: DeliveryProtocolSetOption[] | cdktf.IResolvable) {
    this._option.internalValue = value;
  }
  public resetOption() {
    this._option.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }
}

export class DeliveryProtocolSetList extends cdktf.ComplexList {
  public internalValue? : DeliveryProtocolSet[] | cdktf.IResolvable

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
  public get(index: number): DeliveryProtocolSetOutputReference {
    return new DeliveryProtocolSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery limelight_delivery}
*/
export class Delivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "limelight_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Delivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Delivery to import
  * @param importFromId The id of the existing Delivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Delivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "limelight_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/delivery limelight_delivery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: DeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'limelight_delivery',
      terraformGeneratorMetadata: {
        providerName: 'limelight',
        providerVersion: '1.0.3'
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
    this._publishedHostname = config.publishedHostname;
    this._publishedPath = config.publishedPath;
    this._serviceProfile = config.serviceProfile;
    this._shortname = config.shortname;
    this._sourceHostname = config.sourceHostname;
    this._sourcePath = config.sourcePath;
    this._protocolSet.internalValue = config.protocolSet;
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

  // published_hostname - computed: false, optional: false, required: true
  private _publishedHostname?: string; 
  public get publishedHostname() {
    return this.getStringAttribute('published_hostname');
  }
  public set publishedHostname(value: string) {
    this._publishedHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedHostnameInput() {
    return this._publishedHostname;
  }

  // published_path - computed: false, optional: false, required: true
  private _publishedPath?: string; 
  public get publishedPath() {
    return this.getStringAttribute('published_path');
  }
  public set publishedPath(value: string) {
    this._publishedPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedPathInput() {
    return this._publishedPath;
  }

  // service_profile - computed: false, optional: true, required: false
  private _serviceProfile?: string; 
  public get serviceProfile() {
    return this.getStringAttribute('service_profile');
  }
  public set serviceProfile(value: string) {
    this._serviceProfile = value;
  }
  public resetServiceProfile() {
    this._serviceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProfileInput() {
    return this._serviceProfile;
  }

  // shortname - computed: false, optional: false, required: true
  private _shortname?: string; 
  public get shortname() {
    return this.getStringAttribute('shortname');
  }
  public set shortname(value: string) {
    this._shortname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortnameInput() {
    return this._shortname;
  }

  // source_hostname - computed: false, optional: false, required: true
  private _sourceHostname?: string; 
  public get sourceHostname() {
    return this.getStringAttribute('source_hostname');
  }
  public set sourceHostname(value: string) {
    this._sourceHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostnameInput() {
    return this._sourceHostname;
  }

  // source_path - computed: false, optional: false, required: true
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // protocol_set - computed: false, optional: false, required: true
  private _protocolSet = new DeliveryProtocolSetList(this, "protocol_set", false);
  public get protocolSet() {
    return this._protocolSet;
  }
  public putProtocolSet(value: DeliveryProtocolSet[] | cdktf.IResolvable) {
    this._protocolSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolSetInput() {
    return this._protocolSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      published_hostname: cdktf.stringToTerraform(this._publishedHostname),
      published_path: cdktf.stringToTerraform(this._publishedPath),
      service_profile: cdktf.stringToTerraform(this._serviceProfile),
      shortname: cdktf.stringToTerraform(this._shortname),
      source_hostname: cdktf.stringToTerraform(this._sourceHostname),
      source_path: cdktf.stringToTerraform(this._sourcePath),
      protocol_set: cdktf.listMapper(deliveryProtocolSetToTerraform, true)(this._protocolSet.internalValue),
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
      published_hostname: {
        value: cdktf.stringToHclTerraform(this._publishedHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published_path: {
        value: cdktf.stringToHclTerraform(this._publishedPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_profile: {
        value: cdktf.stringToHclTerraform(this._serviceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shortname: {
        value: cdktf.stringToHclTerraform(this._shortname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_hostname: {
        value: cdktf.stringToHclTerraform(this._sourceHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_path: {
        value: cdktf.stringToHclTerraform(this._sourcePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_set: {
        value: cdktf.listMapperHcl(deliveryProtocolSetToHclTerraform, true)(this._protocolSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryProtocolSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
