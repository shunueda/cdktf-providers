// https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#id Integration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#name Integration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#type Integration#type}
  */
  readonly type: string;
  /**
  * templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#templates Integration#templates}
  */
  readonly templates?: IntegrationTemplates;
}
export interface IntegrationTemplatesSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#image_url Integration#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#message Integration#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#title Integration#title}
  */
  readonly title?: string;
}

export function integrationTemplatesSlackToTerraform(struct?: IntegrationTemplatesSlackOutputReference | IntegrationTemplatesSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function integrationTemplatesSlackToHclTerraform(struct?: IntegrationTemplatesSlackOutputReference | IntegrationTemplatesSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationTemplatesSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationTemplatesSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTemplatesSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUrl = undefined;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUrl = value.imageUrl;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface IntegrationTemplates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#grouping_key Integration#grouping_key}
  */
  readonly groupingKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#resolve_signal Integration#resolve_signal}
  */
  readonly resolveSignal?: string;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#slack Integration#slack}
  */
  readonly slack?: IntegrationTemplatesSlack;
}

export function integrationTemplatesToTerraform(struct?: IntegrationTemplatesOutputReference | IntegrationTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grouping_key: cdktf.stringToTerraform(struct!.groupingKey),
    resolve_signal: cdktf.stringToTerraform(struct!.resolveSignal),
    slack: integrationTemplatesSlackToTerraform(struct!.slack),
  }
}


export function integrationTemplatesToHclTerraform(struct?: IntegrationTemplatesOutputReference | IntegrationTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grouping_key: {
      value: cdktf.stringToHclTerraform(struct!.groupingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_signal: {
      value: cdktf.stringToHclTerraform(struct!.resolveSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slack: {
      value: integrationTemplatesSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationTemplatesSlackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingKey = this._groupingKey;
    }
    if (this._resolveSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveSignal = this._resolveSignal;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupingKey = undefined;
      this._resolveSignal = undefined;
      this._slack.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupingKey = value.groupingKey;
      this._resolveSignal = value.resolveSignal;
      this._slack.internalValue = value.slack;
    }
  }

  // grouping_key - computed: false, optional: true, required: false
  private _groupingKey?: string; 
  public get groupingKey() {
    return this.getStringAttribute('grouping_key');
  }
  public set groupingKey(value: string) {
    this._groupingKey = value;
  }
  public resetGroupingKey() {
    this._groupingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingKeyInput() {
    return this._groupingKey;
  }

  // resolve_signal - computed: false, optional: true, required: false
  private _resolveSignal?: string; 
  public get resolveSignal() {
    return this.getStringAttribute('resolve_signal');
  }
  public set resolveSignal(value: string) {
    this._resolveSignal = value;
  }
  public resetResolveSignal() {
    this._resolveSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveSignalInput() {
    return this._resolveSignal;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new IntegrationTemplatesSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: IntegrationTemplatesSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration amixr_integration}
*/
export class Integration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "amixr_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Integration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Integration to import
  * @param importFromId The id of the existing Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Integration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "amixr_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/integration amixr_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'amixr_integration',
      terraformGeneratorMetadata: {
        providerName: 'amixr',
        providerVersion: '0.2.3'
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
    this._type = config.type;
    this._templates.internalValue = config.templates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_route_id - computed: true, optional: false, required: false
  public get defaultRouteId() {
    return this.getStringAttribute('default_route_id');
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

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // templates - computed: false, optional: true, required: false
  private _templates = new IntegrationTemplatesOutputReference(this, "templates");
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: IntegrationTemplates) {
    this._templates.internalValue = value;
  }
  public resetTemplates() {
    this._templates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      templates: integrationTemplatesToTerraform(this._templates.internalValue),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      templates: {
        value: integrationTemplatesToHclTerraform(this._templates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationTemplatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
