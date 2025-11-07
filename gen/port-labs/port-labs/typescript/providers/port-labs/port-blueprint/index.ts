// https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * The calculation properties of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#calculation_properties PortBlueprint#calculation_properties}
  */
  readonly calculationProperties?: { [key: string]: PortBlueprintCalculationProperties } | cdktf.IResolvable;
  /**
  * This flag is only relevant for blueprint creation, by default if not set, a catalog page will be created for the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#create_catalog_page PortBlueprint#create_catalog_page}
  */
  readonly createCatalogPage?: boolean | cdktf.IResolvable;
  /**
  * The description of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#description PortBlueprint#description}
  */
  readonly description?: string;
  /**
  * If set to true, the blueprint will be deleted with all its entities, even if they are not managed by Terraform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#force_delete_entities PortBlueprint#force_delete_entities}
  */
  readonly forceDeleteEntities?: boolean | cdktf.IResolvable;
  /**
  * The icon of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#icon PortBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The identifier of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#identifier PortBlueprint#identifier}
  */
  readonly identifier: string;
  /**
  * The changelog destination of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#kafka_changelog_destination PortBlueprint#kafka_changelog_destination}
  */
  readonly kafkaChangelogDestination?: PortBlueprintKafkaChangelogDestination;
  /**
  * The mirror properties of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#mirror_properties PortBlueprint#mirror_properties}
  */
  readonly mirrorProperties?: { [key: string]: PortBlueprintMirrorProperties } | cdktf.IResolvable;
  /**
  * Optional ownership field for Blueprint. 'type' can be Inherited or Direct. If 'Inherited', then 'path' is required and must be a valid relation identifiers path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#ownership PortBlueprint#ownership}
  */
  readonly ownership?: PortBlueprintOwnership;
  /**
  * The properties of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#properties PortBlueprint#properties}
  */
  readonly properties?: PortBlueprintProperties;
  /**
  * The relations of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#relations PortBlueprint#relations}
  */
  readonly relations?: { [key: string]: PortBlueprintRelations } | cdktf.IResolvable;
  /**
  * The team inheritance of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#team_inheritance PortBlueprint#team_inheritance}
  */
  readonly teamInheritance?: PortBlueprintTeamInheritance;
  /**
  * The display name of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title: string;
  /**
  * The webhook changelog destination of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#webhook_changelog_destination PortBlueprint#webhook_changelog_destination}
  */
  readonly webhookChangelogDestination?: PortBlueprintWebhookChangelogDestination;
}
export interface PortBlueprintCalculationPropertiesSpecAuthentication {
  /**
  * The authorizationUrl of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#authorization_url PortBlueprint#authorization_url}
  */
  readonly authorizationUrl: string;
  /**
  * The clientId of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#client_id PortBlueprint#client_id}
  */
  readonly clientId: string;
  /**
  * The tokenUrl of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#token_url PortBlueprint#token_url}
  */
  readonly tokenUrl: string;
}

export function portBlueprintCalculationPropertiesSpecAuthenticationToTerraform(struct?: PortBlueprintCalculationPropertiesSpecAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_url: cdktf.stringToTerraform(struct!.authorizationUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function portBlueprintCalculationPropertiesSpecAuthenticationToHclTerraform(struct?: PortBlueprintCalculationPropertiesSpecAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_url: {
      value: cdktf.stringToHclTerraform(struct!.authorizationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintCalculationPropertiesSpecAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintCalculationPropertiesSpecAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationUrl = this._authorizationUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintCalculationPropertiesSpecAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationUrl = undefined;
      this._clientId = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationUrl = value.authorizationUrl;
      this._clientId = value.clientId;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // authorization_url - computed: false, optional: false, required: true
  private _authorizationUrl?: string; 
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }
  public set authorizationUrl(value: string) {
    this._authorizationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationUrlInput() {
    return this._authorizationUrl;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface PortBlueprintCalculationProperties {
  /**
  * The calculation of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#calculation PortBlueprint#calculation}
  */
  readonly calculation: string;
  /**
  * The colorized of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#colorized PortBlueprint#colorized}
  */
  readonly colorized?: boolean | cdktf.IResolvable;
  /**
  * The colors of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#colors PortBlueprint#colors}
  */
  readonly colors?: { [key: string]: string };
  /**
  * The description of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#description PortBlueprint#description}
  */
  readonly description?: string;
  /**
  * The format of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#format PortBlueprint#format}
  */
  readonly format?: string;
  /**
  * The icon of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#icon PortBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The spec of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#spec PortBlueprint#spec}
  */
  readonly spec?: string;
  /**
  * The spec authentication of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#spec_authentication PortBlueprint#spec_authentication}
  */
  readonly specAuthentication?: PortBlueprintCalculationPropertiesSpecAuthentication;
  /**
  * The title of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
  /**
  * The type of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#type PortBlueprint#type}
  */
  readonly type: string;
}

export function portBlueprintCalculationPropertiesToTerraform(struct?: PortBlueprintCalculationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculation: cdktf.stringToTerraform(struct!.calculation),
    colorized: cdktf.booleanToTerraform(struct!.colorized),
    colors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.colors),
    description: cdktf.stringToTerraform(struct!.description),
    format: cdktf.stringToTerraform(struct!.format),
    icon: cdktf.stringToTerraform(struct!.icon),
    spec: cdktf.stringToTerraform(struct!.spec),
    spec_authentication: portBlueprintCalculationPropertiesSpecAuthenticationToTerraform(struct!.specAuthentication),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function portBlueprintCalculationPropertiesToHclTerraform(struct?: PortBlueprintCalculationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calculation: {
      value: cdktf.stringToHclTerraform(struct!.calculation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    colorized: {
      value: cdktf.booleanToHclTerraform(struct!.colorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    colors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.colors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_authentication: {
      value: portBlueprintCalculationPropertiesSpecAuthenticationToHclTerraform(struct!.specAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintCalculationPropertiesSpecAuthentication",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class PortBlueprintCalculationPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintCalculationProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calculation !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculation = this._calculation;
    }
    if (this._colorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorized = this._colorized;
    }
    if (this._colors !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._specAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specAuthentication = this._specAuthentication?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintCalculationProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calculation = undefined;
      this._colorized = undefined;
      this._colors = undefined;
      this._description = undefined;
      this._format = undefined;
      this._icon = undefined;
      this._spec = undefined;
      this._specAuthentication.internalValue = undefined;
      this._title = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calculation = value.calculation;
      this._colorized = value.colorized;
      this._colors = value.colors;
      this._description = value.description;
      this._format = value.format;
      this._icon = value.icon;
      this._spec = value.spec;
      this._specAuthentication.internalValue = value.specAuthentication;
      this._title = value.title;
      this._type = value.type;
    }
  }

  // calculation - computed: false, optional: false, required: true
  private _calculation?: string; 
  public get calculation() {
    return this.getStringAttribute('calculation');
  }
  public set calculation(value: string) {
    this._calculation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get calculationInput() {
    return this._calculation;
  }

  // colorized - computed: false, optional: true, required: false
  private _colorized?: boolean | cdktf.IResolvable; 
  public get colorized() {
    return this.getBooleanAttribute('colorized');
  }
  public set colorized(value: boolean | cdktf.IResolvable) {
    this._colorized = value;
  }
  public resetColorized() {
    this._colorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorizedInput() {
    return this._colorized;
  }

  // colors - computed: false, optional: true, required: false
  private _colors?: { [key: string]: string }; 
  public get colors() {
    return this.getStringMapAttribute('colors');
  }
  public set colors(value: { [key: string]: string }) {
    this._colors = value;
  }
  public resetColors() {
    this._colors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // spec_authentication - computed: false, optional: true, required: false
  private _specAuthentication = new PortBlueprintCalculationPropertiesSpecAuthenticationOutputReference(this, "spec_authentication");
  public get specAuthentication() {
    return this._specAuthentication;
  }
  public putSpecAuthentication(value: PortBlueprintCalculationPropertiesSpecAuthentication) {
    this._specAuthentication.internalValue = value;
  }
  public resetSpecAuthentication() {
    this._specAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specAuthenticationInput() {
    return this._specAuthentication.internalValue;
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
}

export class PortBlueprintCalculationPropertiesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintCalculationProperties } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintCalculationPropertiesOutputReference {
    return new PortBlueprintCalculationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintKafkaChangelogDestination {
}

export function portBlueprintKafkaChangelogDestinationToTerraform(struct?: PortBlueprintKafkaChangelogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portBlueprintKafkaChangelogDestinationToHclTerraform(struct?: PortBlueprintKafkaChangelogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortBlueprintKafkaChangelogDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintKafkaChangelogDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintKafkaChangelogDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface PortBlueprintMirrorProperties {
  /**
  * The path of the mirror property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#path PortBlueprint#path}
  */
  readonly path: string;
  /**
  * The title of the mirror property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
}

export function portBlueprintMirrorPropertiesToTerraform(struct?: PortBlueprintMirrorProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portBlueprintMirrorPropertiesToHclTerraform(struct?: PortBlueprintMirrorProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class PortBlueprintMirrorPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintMirrorProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintMirrorProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._title = value.title;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class PortBlueprintMirrorPropertiesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintMirrorProperties } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintMirrorPropertiesOutputReference {
    return new PortBlueprintMirrorPropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintOwnership {
  /**
  * Path for the Inherited ownership type. Required when type is 'Inherited'. Must be a valid relation identifiers path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#path PortBlueprint#path}
  */
  readonly path?: string;
  /**
  * Optional title for the owning teams property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
  /**
  * Ownership type: either 'Inherited' or 'Direct'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#type PortBlueprint#type}
  */
  readonly type: string;
}

export function portBlueprintOwnershipToTerraform(struct?: PortBlueprintOwnership | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function portBlueprintOwnershipToHclTerraform(struct?: PortBlueprintOwnership | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class PortBlueprintOwnershipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintOwnership | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintOwnership | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._title = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._title = value.title;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}
export interface PortBlueprintPropertiesArrayPropsBooleanItems {
  /**
  * The default of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#default PortBlueprint#default}
  */
  readonly default?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
}

export function portBlueprintPropertiesArrayPropsBooleanItemsToTerraform(struct?: PortBlueprintPropertiesArrayPropsBooleanItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.booleanToTerraform, false)(struct!.default),
  }
}


export function portBlueprintPropertiesArrayPropsBooleanItemsToHclTerraform(struct?: PortBlueprintPropertiesArrayPropsBooleanItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "booleanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintPropertiesArrayPropsBooleanItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPropertiesArrayPropsBooleanItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesArrayPropsBooleanItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable; 
  public get default() {
    return this.interpolationForAttribute('default');
  }
  public set default(value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface PortBlueprintPropertiesArrayPropsNumberItems {
  /**
  * The default of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#default PortBlueprint#default}
  */
  readonly default?: number[];
}

export function portBlueprintPropertiesArrayPropsNumberItemsToTerraform(struct?: PortBlueprintPropertiesArrayPropsNumberItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.default),
  }
}


export function portBlueprintPropertiesArrayPropsNumberItemsToHclTerraform(struct?: PortBlueprintPropertiesArrayPropsNumberItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintPropertiesArrayPropsNumberItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPropertiesArrayPropsNumberItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesArrayPropsNumberItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: number[]; 
  public get default() {
    return this.getNumberListAttribute('default');
  }
  public set default(value: number[]) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface PortBlueprintPropertiesArrayPropsObjectItems {
  /**
  * The default of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#default PortBlueprint#default}
  */
  readonly default?: string[];
}

export function portBlueprintPropertiesArrayPropsObjectItemsToTerraform(struct?: PortBlueprintPropertiesArrayPropsObjectItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.default),
  }
}


export function portBlueprintPropertiesArrayPropsObjectItemsToHclTerraform(struct?: PortBlueprintPropertiesArrayPropsObjectItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintPropertiesArrayPropsObjectItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPropertiesArrayPropsObjectItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesArrayPropsObjectItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string[]; 
  public get default() {
    return this.getListAttribute('default');
  }
  public set default(value: string[]) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface PortBlueprintPropertiesArrayPropsStringItems {
  /**
  * The default of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#default PortBlueprint#default}
  */
  readonly default?: string[];
  /**
  * The enum of the string array items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#enum PortBlueprint#enum}
  */
  readonly enum?: string[];
  /**
  * The enum colors of the string array items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#enum_colors PortBlueprint#enum_colors}
  */
  readonly enumColors?: { [key: string]: string };
  /**
  * The format of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#format PortBlueprint#format}
  */
  readonly format?: string;
  /**
  * The pattern of the string array items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#pattern PortBlueprint#pattern}
  */
  readonly pattern?: string;
}

export function portBlueprintPropertiesArrayPropsStringItemsToTerraform(struct?: PortBlueprintPropertiesArrayPropsStringItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.default),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    enum_colors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.enumColors),
    format: cdktf.stringToTerraform(struct!.format),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function portBlueprintPropertiesArrayPropsStringItemsToHclTerraform(struct?: PortBlueprintPropertiesArrayPropsStringItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enum_colors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.enumColors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintPropertiesArrayPropsStringItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPropertiesArrayPropsStringItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._enumColors !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumColors = this._enumColors;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesArrayPropsStringItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._enum = undefined;
      this._enumColors = undefined;
      this._format = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._enum = value.enum;
      this._enumColors = value.enumColors;
      this._format = value.format;
      this._pattern = value.pattern;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string[]; 
  public get default() {
    return this.getListAttribute('default');
  }
  public set default(value: string[]) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // enum_colors - computed: false, optional: true, required: false
  private _enumColors?: { [key: string]: string }; 
  public get enumColors() {
    return this.getStringMapAttribute('enum_colors');
  }
  public set enumColors(value: { [key: string]: string }) {
    this._enumColors = value;
  }
  public resetEnumColors() {
    this._enumColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumColorsInput() {
    return this._enumColors;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface PortBlueprintPropertiesArrayProps {
  /**
  * The items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#boolean_items PortBlueprint#boolean_items}
  */
  readonly booleanItems?: PortBlueprintPropertiesArrayPropsBooleanItems;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#description PortBlueprint#description}
  */
  readonly description?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#icon PortBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The max items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#max_items PortBlueprint#max_items}
  */
  readonly maxItems?: number;
  /**
  * The min items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#min_items PortBlueprint#min_items}
  */
  readonly minItems?: number;
  /**
  * The items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#number_items PortBlueprint#number_items}
  */
  readonly numberItems?: PortBlueprintPropertiesArrayPropsNumberItems;
  /**
  * The items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#object_items PortBlueprint#object_items}
  */
  readonly objectItems?: PortBlueprintPropertiesArrayPropsObjectItems;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#required PortBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#string_items PortBlueprint#string_items}
  */
  readonly stringItems?: PortBlueprintPropertiesArrayPropsStringItems;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
}

export function portBlueprintPropertiesArrayPropsToTerraform(struct?: PortBlueprintPropertiesArrayProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_items: portBlueprintPropertiesArrayPropsBooleanItemsToTerraform(struct!.booleanItems),
    description: cdktf.stringToTerraform(struct!.description),
    icon: cdktf.stringToTerraform(struct!.icon),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    number_items: portBlueprintPropertiesArrayPropsNumberItemsToTerraform(struct!.numberItems),
    object_items: portBlueprintPropertiesArrayPropsObjectItemsToTerraform(struct!.objectItems),
    required: cdktf.booleanToTerraform(struct!.required),
    string_items: portBlueprintPropertiesArrayPropsStringItemsToTerraform(struct!.stringItems),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portBlueprintPropertiesArrayPropsToHclTerraform(struct?: PortBlueprintPropertiesArrayProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_items: {
      value: portBlueprintPropertiesArrayPropsBooleanItemsToHclTerraform(struct!.booleanItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPropertiesArrayPropsBooleanItems",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_items: {
      value: portBlueprintPropertiesArrayPropsNumberItemsToHclTerraform(struct!.numberItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPropertiesArrayPropsNumberItems",
    },
    object_items: {
      value: portBlueprintPropertiesArrayPropsObjectItemsToHclTerraform(struct!.objectItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPropertiesArrayPropsObjectItems",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    string_items: {
      value: portBlueprintPropertiesArrayPropsStringItemsToHclTerraform(struct!.stringItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPropertiesArrayPropsStringItems",
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

export class PortBlueprintPropertiesArrayPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintPropertiesArrayProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanItems = this._booleanItems?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._numberItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberItems = this._numberItems?.internalValue;
    }
    if (this._objectItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectItems = this._objectItems?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._stringItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringItems = this._stringItems?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesArrayProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanItems.internalValue = undefined;
      this._description = undefined;
      this._icon = undefined;
      this._maxItems = undefined;
      this._minItems = undefined;
      this._numberItems.internalValue = undefined;
      this._objectItems.internalValue = undefined;
      this._required = undefined;
      this._stringItems.internalValue = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanItems.internalValue = value.booleanItems;
      this._description = value.description;
      this._icon = value.icon;
      this._maxItems = value.maxItems;
      this._minItems = value.minItems;
      this._numberItems.internalValue = value.numberItems;
      this._objectItems.internalValue = value.objectItems;
      this._required = value.required;
      this._stringItems.internalValue = value.stringItems;
      this._title = value.title;
    }
  }

  // boolean_items - computed: false, optional: true, required: false
  private _booleanItems = new PortBlueprintPropertiesArrayPropsBooleanItemsOutputReference(this, "boolean_items");
  public get booleanItems() {
    return this._booleanItems;
  }
  public putBooleanItems(value: PortBlueprintPropertiesArrayPropsBooleanItems) {
    this._booleanItems.internalValue = value;
  }
  public resetBooleanItems() {
    this._booleanItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanItemsInput() {
    return this._booleanItems.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // number_items - computed: false, optional: true, required: false
  private _numberItems = new PortBlueprintPropertiesArrayPropsNumberItemsOutputReference(this, "number_items");
  public get numberItems() {
    return this._numberItems;
  }
  public putNumberItems(value: PortBlueprintPropertiesArrayPropsNumberItems) {
    this._numberItems.internalValue = value;
  }
  public resetNumberItems() {
    this._numberItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberItemsInput() {
    return this._numberItems.internalValue;
  }

  // object_items - computed: false, optional: true, required: false
  private _objectItems = new PortBlueprintPropertiesArrayPropsObjectItemsOutputReference(this, "object_items");
  public get objectItems() {
    return this._objectItems;
  }
  public putObjectItems(value: PortBlueprintPropertiesArrayPropsObjectItems) {
    this._objectItems.internalValue = value;
  }
  public resetObjectItems() {
    this._objectItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectItemsInput() {
    return this._objectItems.internalValue;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // string_items - computed: false, optional: true, required: false
  private _stringItems = new PortBlueprintPropertiesArrayPropsStringItemsOutputReference(this, "string_items");
  public get stringItems() {
    return this._stringItems;
  }
  public putStringItems(value: PortBlueprintPropertiesArrayPropsStringItems) {
    this._stringItems.internalValue = value;
  }
  public resetStringItems() {
    this._stringItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringItemsInput() {
    return this._stringItems.internalValue;
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

export class PortBlueprintPropertiesArrayPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintPropertiesArrayProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintPropertiesArrayPropsOutputReference {
    return new PortBlueprintPropertiesArrayPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintPropertiesBooleanProps {
  /**
  * The default of the boolean property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#default PortBlueprint#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#description PortBlueprint#description}
  */
  readonly description?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#icon PortBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#required PortBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
}

export function portBlueprintPropertiesBooleanPropsToTerraform(struct?: PortBlueprintPropertiesBooleanProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    icon: cdktf.stringToTerraform(struct!.icon),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portBlueprintPropertiesBooleanPropsToHclTerraform(struct?: PortBlueprintPropertiesBooleanProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class PortBlueprintPropertiesBooleanPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintPropertiesBooleanProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesBooleanProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._icon = undefined;
      this._required = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._icon = value.icon;
      this._required = value.required;
      this._title = value.title;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class PortBlueprintPropertiesBooleanPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintPropertiesBooleanProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintPropertiesBooleanPropsOutputReference {
    return new PortBlueprintPropertiesBooleanPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintPropertiesNumberProps {
  /**
  * The default of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#default PortBlueprint#default}
  */
  readonly default?: number;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#description PortBlueprint#description}
  */
  readonly description?: string;
  /**
  * The enum of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#enum PortBlueprint#enum}
  */
  readonly enum?: number[];
  /**
  * The enum colors of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#enum_colors PortBlueprint#enum_colors}
  */
  readonly enumColors?: { [key: string]: string };
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#icon PortBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The min of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#maximum PortBlueprint#maximum}
  */
  readonly maximum?: number;
  /**
  * The max of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#minimum PortBlueprint#minimum}
  */
  readonly minimum?: number;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#required PortBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
}

export function portBlueprintPropertiesNumberPropsToTerraform(struct?: PortBlueprintPropertiesNumberProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.enum),
    enum_colors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.enumColors),
    icon: cdktf.stringToTerraform(struct!.icon),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portBlueprintPropertiesNumberPropsToHclTerraform(struct?: PortBlueprintPropertiesNumberProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.numberToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enum_colors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.enumColors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class PortBlueprintPropertiesNumberPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintPropertiesNumberProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._enumColors !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumColors = this._enumColors;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesNumberProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._enumColors = undefined;
      this._icon = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._required = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._enum = value.enum;
      this._enumColors = value.enumColors;
      this._icon = value.icon;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._required = value.required;
      this._title = value.title;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: number[]; 
  public get enum() {
    return this.getNumberListAttribute('enum');
  }
  public set enum(value: number[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // enum_colors - computed: false, optional: true, required: false
  private _enumColors?: { [key: string]: string }; 
  public get enumColors() {
    return this.getStringMapAttribute('enum_colors');
  }
  public set enumColors(value: { [key: string]: string }) {
    this._enumColors = value;
  }
  public resetEnumColors() {
    this._enumColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumColorsInput() {
    return this._enumColors;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class PortBlueprintPropertiesNumberPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintPropertiesNumberProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintPropertiesNumberPropsOutputReference {
    return new PortBlueprintPropertiesNumberPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintPropertiesObjectProps {
  /**
  * The default of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#default PortBlueprint#default}
  */
  readonly default?: string;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#description PortBlueprint#description}
  */
  readonly description?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#icon PortBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#required PortBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The spec of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#spec PortBlueprint#spec}
  */
  readonly spec?: string;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
}

export function portBlueprintPropertiesObjectPropsToTerraform(struct?: PortBlueprintPropertiesObjectProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    icon: cdktf.stringToTerraform(struct!.icon),
    required: cdktf.booleanToTerraform(struct!.required),
    spec: cdktf.stringToTerraform(struct!.spec),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portBlueprintPropertiesObjectPropsToHclTerraform(struct?: PortBlueprintPropertiesObjectProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
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

export class PortBlueprintPropertiesObjectPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintPropertiesObjectProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesObjectProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._icon = undefined;
      this._required = undefined;
      this._spec = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._icon = value.icon;
      this._required = value.required;
      this._spec = value.spec;
      this._title = value.title;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
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

export class PortBlueprintPropertiesObjectPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintPropertiesObjectProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintPropertiesObjectPropsOutputReference {
    return new PortBlueprintPropertiesObjectPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintPropertiesStringPropsSpecAuthentication {
  /**
  * The authorizationUrl of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#authorization_url PortBlueprint#authorization_url}
  */
  readonly authorizationUrl: string;
  /**
  * The clientId of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#client_id PortBlueprint#client_id}
  */
  readonly clientId: string;
  /**
  * The tokenUrl of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#token_url PortBlueprint#token_url}
  */
  readonly tokenUrl: string;
}

export function portBlueprintPropertiesStringPropsSpecAuthenticationToTerraform(struct?: PortBlueprintPropertiesStringPropsSpecAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_url: cdktf.stringToTerraform(struct!.authorizationUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function portBlueprintPropertiesStringPropsSpecAuthenticationToHclTerraform(struct?: PortBlueprintPropertiesStringPropsSpecAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_url: {
      value: cdktf.stringToHclTerraform(struct!.authorizationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintPropertiesStringPropsSpecAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPropertiesStringPropsSpecAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationUrl = this._authorizationUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesStringPropsSpecAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationUrl = undefined;
      this._clientId = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationUrl = value.authorizationUrl;
      this._clientId = value.clientId;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // authorization_url - computed: false, optional: false, required: true
  private _authorizationUrl?: string; 
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }
  public set authorizationUrl(value: string) {
    this._authorizationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationUrlInput() {
    return this._authorizationUrl;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface PortBlueprintPropertiesStringProps {
  /**
  * The default of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#default PortBlueprint#default}
  */
  readonly default?: string;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#description PortBlueprint#description}
  */
  readonly description?: string;
  /**
  * The enum of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#enum PortBlueprint#enum}
  */
  readonly enum?: string[];
  /**
  * The enum colors of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#enum_colors PortBlueprint#enum_colors}
  */
  readonly enumColors?: { [key: string]: string };
  /**
  * The format of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#format PortBlueprint#format}
  */
  readonly format?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#icon PortBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The max length of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#max_length PortBlueprint#max_length}
  */
  readonly maxLength?: number;
  /**
  * The min length of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#min_length PortBlueprint#min_length}
  */
  readonly minLength?: number;
  /**
  * The pattern of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#pattern PortBlueprint#pattern}
  */
  readonly pattern?: string;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#required PortBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The spec of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#spec PortBlueprint#spec}
  */
  readonly spec?: string;
  /**
  * The spec authentication of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#spec_authentication PortBlueprint#spec_authentication}
  */
  readonly specAuthentication?: PortBlueprintPropertiesStringPropsSpecAuthentication;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
}

export function portBlueprintPropertiesStringPropsToTerraform(struct?: PortBlueprintPropertiesStringProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    enum_colors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.enumColors),
    format: cdktf.stringToTerraform(struct!.format),
    icon: cdktf.stringToTerraform(struct!.icon),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    required: cdktf.booleanToTerraform(struct!.required),
    spec: cdktf.stringToTerraform(struct!.spec),
    spec_authentication: portBlueprintPropertiesStringPropsSpecAuthenticationToTerraform(struct!.specAuthentication),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portBlueprintPropertiesStringPropsToHclTerraform(struct?: PortBlueprintPropertiesStringProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enum_colors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.enumColors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_authentication: {
      value: portBlueprintPropertiesStringPropsSpecAuthenticationToHclTerraform(struct!.specAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPropertiesStringPropsSpecAuthentication",
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

export class PortBlueprintPropertiesStringPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintPropertiesStringProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._enumColors !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumColors = this._enumColors;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._specAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specAuthentication = this._specAuthentication?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPropertiesStringProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._enumColors = undefined;
      this._format = undefined;
      this._icon = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._pattern = undefined;
      this._required = undefined;
      this._spec = undefined;
      this._specAuthentication.internalValue = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._enum = value.enum;
      this._enumColors = value.enumColors;
      this._format = value.format;
      this._icon = value.icon;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._pattern = value.pattern;
      this._required = value.required;
      this._spec = value.spec;
      this._specAuthentication.internalValue = value.specAuthentication;
      this._title = value.title;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // enum_colors - computed: false, optional: true, required: false
  private _enumColors?: { [key: string]: string }; 
  public get enumColors() {
    return this.getStringMapAttribute('enum_colors');
  }
  public set enumColors(value: { [key: string]: string }) {
    this._enumColors = value;
  }
  public resetEnumColors() {
    this._enumColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumColorsInput() {
    return this._enumColors;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // spec_authentication - computed: false, optional: true, required: false
  private _specAuthentication = new PortBlueprintPropertiesStringPropsSpecAuthenticationOutputReference(this, "spec_authentication");
  public get specAuthentication() {
    return this._specAuthentication;
  }
  public putSpecAuthentication(value: PortBlueprintPropertiesStringPropsSpecAuthentication) {
    this._specAuthentication.internalValue = value;
  }
  public resetSpecAuthentication() {
    this._specAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specAuthenticationInput() {
    return this._specAuthentication.internalValue;
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

export class PortBlueprintPropertiesStringPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintPropertiesStringProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintPropertiesStringPropsOutputReference {
    return new PortBlueprintPropertiesStringPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintProperties {
  /**
  * The array property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#array_props PortBlueprint#array_props}
  */
  readonly arrayProps?: { [key: string]: PortBlueprintPropertiesArrayProps } | cdktf.IResolvable;
  /**
  * The boolean property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#boolean_props PortBlueprint#boolean_props}
  */
  readonly booleanProps?: { [key: string]: PortBlueprintPropertiesBooleanProps } | cdktf.IResolvable;
  /**
  * The number property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#number_props PortBlueprint#number_props}
  */
  readonly numberProps?: { [key: string]: PortBlueprintPropertiesNumberProps } | cdktf.IResolvable;
  /**
  * The object property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#object_props PortBlueprint#object_props}
  */
  readonly objectProps?: { [key: string]: PortBlueprintPropertiesObjectProps } | cdktf.IResolvable;
  /**
  * The string property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#string_props PortBlueprint#string_props}
  */
  readonly stringProps?: { [key: string]: PortBlueprintPropertiesStringProps } | cdktf.IResolvable;
}

export function portBlueprintPropertiesToTerraform(struct?: PortBlueprintProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_props: cdktf.hashMapper(portBlueprintPropertiesArrayPropsToTerraform)(struct!.arrayProps),
    boolean_props: cdktf.hashMapper(portBlueprintPropertiesBooleanPropsToTerraform)(struct!.booleanProps),
    number_props: cdktf.hashMapper(portBlueprintPropertiesNumberPropsToTerraform)(struct!.numberProps),
    object_props: cdktf.hashMapper(portBlueprintPropertiesObjectPropsToTerraform)(struct!.objectProps),
    string_props: cdktf.hashMapper(portBlueprintPropertiesStringPropsToTerraform)(struct!.stringProps),
  }
}


export function portBlueprintPropertiesToHclTerraform(struct?: PortBlueprintProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_props: {
      value: cdktf.hashMapperHcl(portBlueprintPropertiesArrayPropsToHclTerraform)(struct!.arrayProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortBlueprintPropertiesArrayPropsMap",
    },
    boolean_props: {
      value: cdktf.hashMapperHcl(portBlueprintPropertiesBooleanPropsToHclTerraform)(struct!.booleanProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortBlueprintPropertiesBooleanPropsMap",
    },
    number_props: {
      value: cdktf.hashMapperHcl(portBlueprintPropertiesNumberPropsToHclTerraform)(struct!.numberProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortBlueprintPropertiesNumberPropsMap",
    },
    object_props: {
      value: cdktf.hashMapperHcl(portBlueprintPropertiesObjectPropsToHclTerraform)(struct!.objectProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortBlueprintPropertiesObjectPropsMap",
    },
    string_props: {
      value: cdktf.hashMapperHcl(portBlueprintPropertiesStringPropsToHclTerraform)(struct!.stringProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortBlueprintPropertiesStringPropsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayProps = this._arrayProps?.internalValue;
    }
    if (this._booleanProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanProps = this._booleanProps?.internalValue;
    }
    if (this._numberProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberProps = this._numberProps?.internalValue;
    }
    if (this._objectProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectProps = this._objectProps?.internalValue;
    }
    if (this._stringProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringProps = this._stringProps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayProps.internalValue = undefined;
      this._booleanProps.internalValue = undefined;
      this._numberProps.internalValue = undefined;
      this._objectProps.internalValue = undefined;
      this._stringProps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayProps.internalValue = value.arrayProps;
      this._booleanProps.internalValue = value.booleanProps;
      this._numberProps.internalValue = value.numberProps;
      this._objectProps.internalValue = value.objectProps;
      this._stringProps.internalValue = value.stringProps;
    }
  }

  // array_props - computed: false, optional: true, required: false
  private _arrayProps = new PortBlueprintPropertiesArrayPropsMap(this, "array_props");
  public get arrayProps() {
    return this._arrayProps;
  }
  public putArrayProps(value: { [key: string]: PortBlueprintPropertiesArrayProps } | cdktf.IResolvable) {
    this._arrayProps.internalValue = value;
  }
  public resetArrayProps() {
    this._arrayProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayPropsInput() {
    return this._arrayProps.internalValue;
  }

  // boolean_props - computed: false, optional: true, required: false
  private _booleanProps = new PortBlueprintPropertiesBooleanPropsMap(this, "boolean_props");
  public get booleanProps() {
    return this._booleanProps;
  }
  public putBooleanProps(value: { [key: string]: PortBlueprintPropertiesBooleanProps } | cdktf.IResolvable) {
    this._booleanProps.internalValue = value;
  }
  public resetBooleanProps() {
    this._booleanProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanPropsInput() {
    return this._booleanProps.internalValue;
  }

  // number_props - computed: false, optional: true, required: false
  private _numberProps = new PortBlueprintPropertiesNumberPropsMap(this, "number_props");
  public get numberProps() {
    return this._numberProps;
  }
  public putNumberProps(value: { [key: string]: PortBlueprintPropertiesNumberProps } | cdktf.IResolvable) {
    this._numberProps.internalValue = value;
  }
  public resetNumberProps() {
    this._numberProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberPropsInput() {
    return this._numberProps.internalValue;
  }

  // object_props - computed: false, optional: true, required: false
  private _objectProps = new PortBlueprintPropertiesObjectPropsMap(this, "object_props");
  public get objectProps() {
    return this._objectProps;
  }
  public putObjectProps(value: { [key: string]: PortBlueprintPropertiesObjectProps } | cdktf.IResolvable) {
    this._objectProps.internalValue = value;
  }
  public resetObjectProps() {
    this._objectProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPropsInput() {
    return this._objectProps.internalValue;
  }

  // string_props - computed: false, optional: true, required: false
  private _stringProps = new PortBlueprintPropertiesStringPropsMap(this, "string_props");
  public get stringProps() {
    return this._stringProps;
  }
  public putStringProps(value: { [key: string]: PortBlueprintPropertiesStringProps } | cdktf.IResolvable) {
    this._stringProps.internalValue = value;
  }
  public resetStringProps() {
    this._stringProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringPropsInput() {
    return this._stringProps.internalValue;
  }
}
export interface PortBlueprintRelations {
  /**
  * The description of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#description PortBlueprint#description}
  */
  readonly description?: string;
  /**
  * The many of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#many PortBlueprint#many}
  */
  readonly many?: boolean | cdktf.IResolvable;
  /**
  * The required of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#required PortBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The target of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#target PortBlueprint#target}
  */
  readonly target: string;
  /**
  * The title of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#title PortBlueprint#title}
  */
  readonly title?: string;
}

export function portBlueprintRelationsToTerraform(struct?: PortBlueprintRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    many: cdktf.booleanToTerraform(struct!.many),
    required: cdktf.booleanToTerraform(struct!.required),
    target: cdktf.stringToTerraform(struct!.target),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portBlueprintRelationsToHclTerraform(struct?: PortBlueprintRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    many: {
      value: cdktf.booleanToHclTerraform(struct!.many),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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

export class PortBlueprintRelationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintRelations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._many !== undefined) {
      hasAnyValues = true;
      internalValueResult.many = this._many;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintRelations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._many = undefined;
      this._required = undefined;
      this._target = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._many = value.many;
      this._required = value.required;
      this._target = value.target;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // many - computed: true, optional: true, required: false
  private _many?: boolean | cdktf.IResolvable; 
  public get many() {
    return this.getBooleanAttribute('many');
  }
  public set many(value: boolean | cdktf.IResolvable) {
    this._many = value;
  }
  public resetMany() {
    this._many = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manyInput() {
    return this._many;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

export class PortBlueprintRelationsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintRelations } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintRelationsOutputReference {
    return new PortBlueprintRelationsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintTeamInheritance {
  /**
  * The path of the team inheritance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#path PortBlueprint#path}
  */
  readonly path: string;
}

export function portBlueprintTeamInheritanceToTerraform(struct?: PortBlueprintTeamInheritance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function portBlueprintTeamInheritanceToHclTerraform(struct?: PortBlueprintTeamInheritance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintTeamInheritanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintTeamInheritance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintTeamInheritance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface PortBlueprintWebhookChangelogDestination {
  /**
  * The agent of the webhook changelog destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#agent PortBlueprint#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * The url of the webhook changelog destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#url PortBlueprint#url}
  */
  readonly url: string;
}

export function portBlueprintWebhookChangelogDestinationToTerraform(struct?: PortBlueprintWebhookChangelogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.booleanToTerraform(struct!.agent),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function portBlueprintWebhookChangelogDestinationToHclTerraform(struct?: PortBlueprintWebhookChangelogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.booleanToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintWebhookChangelogDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintWebhookChangelogDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintWebhookChangelogDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._url = value.url;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: boolean | cdktf.IResolvable; 
  public get agent() {
    return this.getBooleanAttribute('agent');
  }
  public set agent(value: boolean | cdktf.IResolvable) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint port_blueprint}
*/
export class PortBlueprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortBlueprint to import
  * @param importFromId The id of the existing PortBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_blueprint port_blueprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortBlueprintConfig
  */
  public constructor(scope: Construct, id: string, config: PortBlueprintConfig) {
    super(scope, id, {
      terraformResourceType: 'port_blueprint',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._calculationProperties.internalValue = config.calculationProperties;
    this._createCatalogPage = config.createCatalogPage;
    this._description = config.description;
    this._forceDeleteEntities = config.forceDeleteEntities;
    this._icon = config.icon;
    this._identifier = config.identifier;
    this._kafkaChangelogDestination.internalValue = config.kafkaChangelogDestination;
    this._mirrorProperties.internalValue = config.mirrorProperties;
    this._ownership.internalValue = config.ownership;
    this._properties.internalValue = config.properties;
    this._relations.internalValue = config.relations;
    this._teamInheritance.internalValue = config.teamInheritance;
    this._title = config.title;
    this._webhookChangelogDestination.internalValue = config.webhookChangelogDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calculation_properties - computed: false, optional: true, required: false
  private _calculationProperties = new PortBlueprintCalculationPropertiesMap(this, "calculation_properties");
  public get calculationProperties() {
    return this._calculationProperties;
  }
  public putCalculationProperties(value: { [key: string]: PortBlueprintCalculationProperties } | cdktf.IResolvable) {
    this._calculationProperties.internalValue = value;
  }
  public resetCalculationProperties() {
    this._calculationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculationPropertiesInput() {
    return this._calculationProperties.internalValue;
  }

  // create_catalog_page - computed: true, optional: true, required: false
  private _createCatalogPage?: boolean | cdktf.IResolvable; 
  public get createCatalogPage() {
    return this.getBooleanAttribute('create_catalog_page');
  }
  public set createCatalogPage(value: boolean | cdktf.IResolvable) {
    this._createCatalogPage = value;
  }
  public resetCreateCatalogPage() {
    this._createCatalogPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createCatalogPageInput() {
    return this._createCatalogPage;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // force_delete_entities - computed: true, optional: true, required: false
  private _forceDeleteEntities?: boolean | cdktf.IResolvable; 
  public get forceDeleteEntities() {
    return this.getBooleanAttribute('force_delete_entities');
  }
  public set forceDeleteEntities(value: boolean | cdktf.IResolvable) {
    this._forceDeleteEntities = value;
  }
  public resetForceDeleteEntities() {
    this._forceDeleteEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteEntitiesInput() {
    return this._forceDeleteEntities;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // kafka_changelog_destination - computed: false, optional: true, required: false
  private _kafkaChangelogDestination = new PortBlueprintKafkaChangelogDestinationOutputReference(this, "kafka_changelog_destination");
  public get kafkaChangelogDestination() {
    return this._kafkaChangelogDestination;
  }
  public putKafkaChangelogDestination(value: PortBlueprintKafkaChangelogDestination) {
    this._kafkaChangelogDestination.internalValue = value;
  }
  public resetKafkaChangelogDestination() {
    this._kafkaChangelogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaChangelogDestinationInput() {
    return this._kafkaChangelogDestination.internalValue;
  }

  // mirror_properties - computed: false, optional: true, required: false
  private _mirrorProperties = new PortBlueprintMirrorPropertiesMap(this, "mirror_properties");
  public get mirrorProperties() {
    return this._mirrorProperties;
  }
  public putMirrorProperties(value: { [key: string]: PortBlueprintMirrorProperties } | cdktf.IResolvable) {
    this._mirrorProperties.internalValue = value;
  }
  public resetMirrorProperties() {
    this._mirrorProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPropertiesInput() {
    return this._mirrorProperties.internalValue;
  }

  // ownership - computed: false, optional: true, required: false
  private _ownership = new PortBlueprintOwnershipOutputReference(this, "ownership");
  public get ownership() {
    return this._ownership;
  }
  public putOwnership(value: PortBlueprintOwnership) {
    this._ownership.internalValue = value;
  }
  public resetOwnership() {
    this._ownership.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipInput() {
    return this._ownership.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new PortBlueprintPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: PortBlueprintProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // relations - computed: false, optional: true, required: false
  private _relations = new PortBlueprintRelationsMap(this, "relations");
  public get relations() {
    return this._relations;
  }
  public putRelations(value: { [key: string]: PortBlueprintRelations } | cdktf.IResolvable) {
    this._relations.internalValue = value;
  }
  public resetRelations() {
    this._relations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations.internalValue;
  }

  // team_inheritance - computed: false, optional: true, required: false
  private _teamInheritance = new PortBlueprintTeamInheritanceOutputReference(this, "team_inheritance");
  public get teamInheritance() {
    return this._teamInheritance;
  }
  public putTeamInheritance(value: PortBlueprintTeamInheritance) {
    this._teamInheritance.internalValue = value;
  }
  public resetTeamInheritance() {
    this._teamInheritance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInheritanceInput() {
    return this._teamInheritance.internalValue;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // webhook_changelog_destination - computed: false, optional: true, required: false
  private _webhookChangelogDestination = new PortBlueprintWebhookChangelogDestinationOutputReference(this, "webhook_changelog_destination");
  public get webhookChangelogDestination() {
    return this._webhookChangelogDestination;
  }
  public putWebhookChangelogDestination(value: PortBlueprintWebhookChangelogDestination) {
    this._webhookChangelogDestination.internalValue = value;
  }
  public resetWebhookChangelogDestination() {
    this._webhookChangelogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookChangelogDestinationInput() {
    return this._webhookChangelogDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      calculation_properties: cdktf.hashMapper(portBlueprintCalculationPropertiesToTerraform)(this._calculationProperties.internalValue),
      create_catalog_page: cdktf.booleanToTerraform(this._createCatalogPage),
      description: cdktf.stringToTerraform(this._description),
      force_delete_entities: cdktf.booleanToTerraform(this._forceDeleteEntities),
      icon: cdktf.stringToTerraform(this._icon),
      identifier: cdktf.stringToTerraform(this._identifier),
      kafka_changelog_destination: portBlueprintKafkaChangelogDestinationToTerraform(this._kafkaChangelogDestination.internalValue),
      mirror_properties: cdktf.hashMapper(portBlueprintMirrorPropertiesToTerraform)(this._mirrorProperties.internalValue),
      ownership: portBlueprintOwnershipToTerraform(this._ownership.internalValue),
      properties: portBlueprintPropertiesToTerraform(this._properties.internalValue),
      relations: cdktf.hashMapper(portBlueprintRelationsToTerraform)(this._relations.internalValue),
      team_inheritance: portBlueprintTeamInheritanceToTerraform(this._teamInheritance.internalValue),
      title: cdktf.stringToTerraform(this._title),
      webhook_changelog_destination: portBlueprintWebhookChangelogDestinationToTerraform(this._webhookChangelogDestination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      calculation_properties: {
        value: cdktf.hashMapperHcl(portBlueprintCalculationPropertiesToHclTerraform)(this._calculationProperties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PortBlueprintCalculationPropertiesMap",
      },
      create_catalog_page: {
        value: cdktf.booleanToHclTerraform(this._createCatalogPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete_entities: {
        value: cdktf.booleanToHclTerraform(this._forceDeleteEntities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_changelog_destination: {
        value: portBlueprintKafkaChangelogDestinationToHclTerraform(this._kafkaChangelogDestination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortBlueprintKafkaChangelogDestination",
      },
      mirror_properties: {
        value: cdktf.hashMapperHcl(portBlueprintMirrorPropertiesToHclTerraform)(this._mirrorProperties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PortBlueprintMirrorPropertiesMap",
      },
      ownership: {
        value: portBlueprintOwnershipToHclTerraform(this._ownership.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortBlueprintOwnership",
      },
      properties: {
        value: portBlueprintPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortBlueprintProperties",
      },
      relations: {
        value: cdktf.hashMapperHcl(portBlueprintRelationsToHclTerraform)(this._relations.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PortBlueprintRelationsMap",
      },
      team_inheritance: {
        value: portBlueprintTeamInheritanceToHclTerraform(this._teamInheritance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortBlueprintTeamInheritance",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_changelog_destination: {
        value: portBlueprintWebhookChangelogDestinationToHclTerraform(this._webhookChangelogDestination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortBlueprintWebhookChangelogDestination",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
