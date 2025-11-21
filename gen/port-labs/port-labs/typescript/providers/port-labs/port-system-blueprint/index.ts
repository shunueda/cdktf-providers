// https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortSystemBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * The calculation properties of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#calculation_properties PortSystemBlueprint#calculation_properties}
  */
  readonly calculationProperties?: { [key: string]: PortSystemBlueprintCalculationProperties } | cdktf.IResolvable;
  /**
  * Identifier of the system blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#identifier PortSystemBlueprint#identifier}
  */
  readonly identifier: string;
  /**
  * The mirror properties of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#mirror_properties PortSystemBlueprint#mirror_properties}
  */
  readonly mirrorProperties?: { [key: string]: PortSystemBlueprintMirrorProperties } | cdktf.IResolvable;
  /**
  * The properties of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#properties PortSystemBlueprint#properties}
  */
  readonly properties?: PortSystemBlueprintProperties;
  /**
  * The relations of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#relations PortSystemBlueprint#relations}
  */
  readonly relations?: { [key: string]: PortSystemBlueprintRelations } | cdktf.IResolvable;
}
export interface PortSystemBlueprintCalculationPropertiesSpecAuthentication {
  /**
  * The authorizationUrl of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#authorization_url PortSystemBlueprint#authorization_url}
  */
  readonly authorizationUrl: string;
  /**
  * The clientId of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#client_id PortSystemBlueprint#client_id}
  */
  readonly clientId: string;
  /**
  * The tokenUrl of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#token_url PortSystemBlueprint#token_url}
  */
  readonly tokenUrl: string;
}

export function portSystemBlueprintCalculationPropertiesSpecAuthenticationToTerraform(struct?: PortSystemBlueprintCalculationPropertiesSpecAuthentication | cdktf.IResolvable): any {
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


export function portSystemBlueprintCalculationPropertiesSpecAuthenticationToHclTerraform(struct?: PortSystemBlueprintCalculationPropertiesSpecAuthentication | cdktf.IResolvable): any {
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

export class PortSystemBlueprintCalculationPropertiesSpecAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortSystemBlueprintCalculationPropertiesSpecAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintCalculationPropertiesSpecAuthentication | cdktf.IResolvable | undefined) {
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
export interface PortSystemBlueprintCalculationProperties {
  /**
  * The calculation of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#calculation PortSystemBlueprint#calculation}
  */
  readonly calculation: string;
  /**
  * The colorized of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#colorized PortSystemBlueprint#colorized}
  */
  readonly colorized?: boolean | cdktf.IResolvable;
  /**
  * The colors of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#colors PortSystemBlueprint#colors}
  */
  readonly colors?: { [key: string]: string };
  /**
  * The description of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#description PortSystemBlueprint#description}
  */
  readonly description?: string;
  /**
  * The format of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#format PortSystemBlueprint#format}
  */
  readonly format?: string;
  /**
  * The icon of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#icon PortSystemBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The spec of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#spec PortSystemBlueprint#spec}
  */
  readonly spec?: string;
  /**
  * The spec authentication of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#spec_authentication PortSystemBlueprint#spec_authentication}
  */
  readonly specAuthentication?: PortSystemBlueprintCalculationPropertiesSpecAuthentication;
  /**
  * The title of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#title PortSystemBlueprint#title}
  */
  readonly title?: string;
  /**
  * The type of the calculation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#type PortSystemBlueprint#type}
  */
  readonly type: string;
}

export function portSystemBlueprintCalculationPropertiesToTerraform(struct?: PortSystemBlueprintCalculationProperties | cdktf.IResolvable): any {
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
    spec_authentication: portSystemBlueprintCalculationPropertiesSpecAuthenticationToTerraform(struct!.specAuthentication),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function portSystemBlueprintCalculationPropertiesToHclTerraform(struct?: PortSystemBlueprintCalculationProperties | cdktf.IResolvable): any {
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
      value: portSystemBlueprintCalculationPropertiesSpecAuthenticationToHclTerraform(struct!.specAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "PortSystemBlueprintCalculationPropertiesSpecAuthentication",
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

export class PortSystemBlueprintCalculationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortSystemBlueprintCalculationProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintCalculationProperties | cdktf.IResolvable | undefined) {
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
  private _specAuthentication = new PortSystemBlueprintCalculationPropertiesSpecAuthenticationOutputReference(this, "spec_authentication");
  public get specAuthentication() {
    return this._specAuthentication;
  }
  public putSpecAuthentication(value: PortSystemBlueprintCalculationPropertiesSpecAuthentication) {
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

export class PortSystemBlueprintCalculationPropertiesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortSystemBlueprintCalculationProperties } | cdktf.IResolvable

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
  public get(key: string): PortSystemBlueprintCalculationPropertiesOutputReference {
    return new PortSystemBlueprintCalculationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortSystemBlueprintMirrorProperties {
  /**
  * The path of the mirror property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#path PortSystemBlueprint#path}
  */
  readonly path: string;
  /**
  * The title of the mirror property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#title PortSystemBlueprint#title}
  */
  readonly title?: string;
}

export function portSystemBlueprintMirrorPropertiesToTerraform(struct?: PortSystemBlueprintMirrorProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portSystemBlueprintMirrorPropertiesToHclTerraform(struct?: PortSystemBlueprintMirrorProperties | cdktf.IResolvable): any {
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

export class PortSystemBlueprintMirrorPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortSystemBlueprintMirrorProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintMirrorProperties | cdktf.IResolvable | undefined) {
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

export class PortSystemBlueprintMirrorPropertiesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortSystemBlueprintMirrorProperties } | cdktf.IResolvable

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
  public get(key: string): PortSystemBlueprintMirrorPropertiesOutputReference {
    return new PortSystemBlueprintMirrorPropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortSystemBlueprintPropertiesArrayPropsBooleanItems {
  /**
  * The default of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#default PortSystemBlueprint#default}
  */
  readonly default?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
}

export function portSystemBlueprintPropertiesArrayPropsBooleanItemsToTerraform(struct?: PortSystemBlueprintPropertiesArrayPropsBooleanItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.booleanToTerraform, false)(struct!.default),
  }
}


export function portSystemBlueprintPropertiesArrayPropsBooleanItemsToHclTerraform(struct?: PortSystemBlueprintPropertiesArrayPropsBooleanItems | cdktf.IResolvable): any {
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

export class PortSystemBlueprintPropertiesArrayPropsBooleanItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortSystemBlueprintPropertiesArrayPropsBooleanItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesArrayPropsBooleanItems | cdktf.IResolvable | undefined) {
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
export interface PortSystemBlueprintPropertiesArrayPropsNumberItems {
  /**
  * The default of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#default PortSystemBlueprint#default}
  */
  readonly default?: number[];
}

export function portSystemBlueprintPropertiesArrayPropsNumberItemsToTerraform(struct?: PortSystemBlueprintPropertiesArrayPropsNumberItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.default),
  }
}


export function portSystemBlueprintPropertiesArrayPropsNumberItemsToHclTerraform(struct?: PortSystemBlueprintPropertiesArrayPropsNumberItems | cdktf.IResolvable): any {
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

export class PortSystemBlueprintPropertiesArrayPropsNumberItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortSystemBlueprintPropertiesArrayPropsNumberItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesArrayPropsNumberItems | cdktf.IResolvable | undefined) {
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
export interface PortSystemBlueprintPropertiesArrayPropsObjectItems {
  /**
  * The default of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#default PortSystemBlueprint#default}
  */
  readonly default?: string[];
}

export function portSystemBlueprintPropertiesArrayPropsObjectItemsToTerraform(struct?: PortSystemBlueprintPropertiesArrayPropsObjectItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.default),
  }
}


export function portSystemBlueprintPropertiesArrayPropsObjectItemsToHclTerraform(struct?: PortSystemBlueprintPropertiesArrayPropsObjectItems | cdktf.IResolvable): any {
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

export class PortSystemBlueprintPropertiesArrayPropsObjectItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortSystemBlueprintPropertiesArrayPropsObjectItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesArrayPropsObjectItems | cdktf.IResolvable | undefined) {
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
export interface PortSystemBlueprintPropertiesArrayPropsStringItems {
  /**
  * The default of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#default PortSystemBlueprint#default}
  */
  readonly default?: string[];
  /**
  * The enum of the string array items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#enum PortSystemBlueprint#enum}
  */
  readonly enum?: string[];
  /**
  * The enum colors of the string array items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#enum_colors PortSystemBlueprint#enum_colors}
  */
  readonly enumColors?: { [key: string]: string };
  /**
  * The format of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#format PortSystemBlueprint#format}
  */
  readonly format?: string;
  /**
  * The pattern of the string array items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#pattern PortSystemBlueprint#pattern}
  */
  readonly pattern?: string;
}

export function portSystemBlueprintPropertiesArrayPropsStringItemsToTerraform(struct?: PortSystemBlueprintPropertiesArrayPropsStringItems | cdktf.IResolvable): any {
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


export function portSystemBlueprintPropertiesArrayPropsStringItemsToHclTerraform(struct?: PortSystemBlueprintPropertiesArrayPropsStringItems | cdktf.IResolvable): any {
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

export class PortSystemBlueprintPropertiesArrayPropsStringItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortSystemBlueprintPropertiesArrayPropsStringItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesArrayPropsStringItems | cdktf.IResolvable | undefined) {
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
export interface PortSystemBlueprintPropertiesArrayProps {
  /**
  * The items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#boolean_items PortSystemBlueprint#boolean_items}
  */
  readonly booleanItems?: PortSystemBlueprintPropertiesArrayPropsBooleanItems;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#description PortSystemBlueprint#description}
  */
  readonly description?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#icon PortSystemBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The max items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#max_items PortSystemBlueprint#max_items}
  */
  readonly maxItems?: number;
  /**
  * The min items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#min_items PortSystemBlueprint#min_items}
  */
  readonly minItems?: number;
  /**
  * The items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#number_items PortSystemBlueprint#number_items}
  */
  readonly numberItems?: PortSystemBlueprintPropertiesArrayPropsNumberItems;
  /**
  * The items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#object_items PortSystemBlueprint#object_items}
  */
  readonly objectItems?: PortSystemBlueprintPropertiesArrayPropsObjectItems;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#required PortSystemBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#string_items PortSystemBlueprint#string_items}
  */
  readonly stringItems?: PortSystemBlueprintPropertiesArrayPropsStringItems;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#title PortSystemBlueprint#title}
  */
  readonly title?: string;
}

export function portSystemBlueprintPropertiesArrayPropsToTerraform(struct?: PortSystemBlueprintPropertiesArrayProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_items: portSystemBlueprintPropertiesArrayPropsBooleanItemsToTerraform(struct!.booleanItems),
    description: cdktf.stringToTerraform(struct!.description),
    icon: cdktf.stringToTerraform(struct!.icon),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    number_items: portSystemBlueprintPropertiesArrayPropsNumberItemsToTerraform(struct!.numberItems),
    object_items: portSystemBlueprintPropertiesArrayPropsObjectItemsToTerraform(struct!.objectItems),
    required: cdktf.booleanToTerraform(struct!.required),
    string_items: portSystemBlueprintPropertiesArrayPropsStringItemsToTerraform(struct!.stringItems),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portSystemBlueprintPropertiesArrayPropsToHclTerraform(struct?: PortSystemBlueprintPropertiesArrayProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_items: {
      value: portSystemBlueprintPropertiesArrayPropsBooleanItemsToHclTerraform(struct!.booleanItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortSystemBlueprintPropertiesArrayPropsBooleanItems",
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
      value: portSystemBlueprintPropertiesArrayPropsNumberItemsToHclTerraform(struct!.numberItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortSystemBlueprintPropertiesArrayPropsNumberItems",
    },
    object_items: {
      value: portSystemBlueprintPropertiesArrayPropsObjectItemsToHclTerraform(struct!.objectItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortSystemBlueprintPropertiesArrayPropsObjectItems",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    string_items: {
      value: portSystemBlueprintPropertiesArrayPropsStringItemsToHclTerraform(struct!.stringItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortSystemBlueprintPropertiesArrayPropsStringItems",
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

export class PortSystemBlueprintPropertiesArrayPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortSystemBlueprintPropertiesArrayProps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesArrayProps | cdktf.IResolvable | undefined) {
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
  private _booleanItems = new PortSystemBlueprintPropertiesArrayPropsBooleanItemsOutputReference(this, "boolean_items");
  public get booleanItems() {
    return this._booleanItems;
  }
  public putBooleanItems(value: PortSystemBlueprintPropertiesArrayPropsBooleanItems) {
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
  private _numberItems = new PortSystemBlueprintPropertiesArrayPropsNumberItemsOutputReference(this, "number_items");
  public get numberItems() {
    return this._numberItems;
  }
  public putNumberItems(value: PortSystemBlueprintPropertiesArrayPropsNumberItems) {
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
  private _objectItems = new PortSystemBlueprintPropertiesArrayPropsObjectItemsOutputReference(this, "object_items");
  public get objectItems() {
    return this._objectItems;
  }
  public putObjectItems(value: PortSystemBlueprintPropertiesArrayPropsObjectItems) {
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
  private _stringItems = new PortSystemBlueprintPropertiesArrayPropsStringItemsOutputReference(this, "string_items");
  public get stringItems() {
    return this._stringItems;
  }
  public putStringItems(value: PortSystemBlueprintPropertiesArrayPropsStringItems) {
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

export class PortSystemBlueprintPropertiesArrayPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortSystemBlueprintPropertiesArrayProps } | cdktf.IResolvable

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
  public get(key: string): PortSystemBlueprintPropertiesArrayPropsOutputReference {
    return new PortSystemBlueprintPropertiesArrayPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortSystemBlueprintPropertiesBooleanProps {
  /**
  * The default of the boolean property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#default PortSystemBlueprint#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#description PortSystemBlueprint#description}
  */
  readonly description?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#icon PortSystemBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#required PortSystemBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#title PortSystemBlueprint#title}
  */
  readonly title?: string;
}

export function portSystemBlueprintPropertiesBooleanPropsToTerraform(struct?: PortSystemBlueprintPropertiesBooleanProps | cdktf.IResolvable): any {
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


export function portSystemBlueprintPropertiesBooleanPropsToHclTerraform(struct?: PortSystemBlueprintPropertiesBooleanProps | cdktf.IResolvable): any {
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

export class PortSystemBlueprintPropertiesBooleanPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortSystemBlueprintPropertiesBooleanProps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesBooleanProps | cdktf.IResolvable | undefined) {
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

export class PortSystemBlueprintPropertiesBooleanPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortSystemBlueprintPropertiesBooleanProps } | cdktf.IResolvable

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
  public get(key: string): PortSystemBlueprintPropertiesBooleanPropsOutputReference {
    return new PortSystemBlueprintPropertiesBooleanPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortSystemBlueprintPropertiesNumberProps {
  /**
  * The default of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#default PortSystemBlueprint#default}
  */
  readonly default?: number;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#description PortSystemBlueprint#description}
  */
  readonly description?: string;
  /**
  * The enum of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#enum PortSystemBlueprint#enum}
  */
  readonly enum?: number[];
  /**
  * The enum colors of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#enum_colors PortSystemBlueprint#enum_colors}
  */
  readonly enumColors?: { [key: string]: string };
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#icon PortSystemBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The min of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#maximum PortSystemBlueprint#maximum}
  */
  readonly maximum?: number;
  /**
  * The max of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#minimum PortSystemBlueprint#minimum}
  */
  readonly minimum?: number;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#required PortSystemBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#title PortSystemBlueprint#title}
  */
  readonly title?: string;
}

export function portSystemBlueprintPropertiesNumberPropsToTerraform(struct?: PortSystemBlueprintPropertiesNumberProps | cdktf.IResolvable): any {
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


export function portSystemBlueprintPropertiesNumberPropsToHclTerraform(struct?: PortSystemBlueprintPropertiesNumberProps | cdktf.IResolvable): any {
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

export class PortSystemBlueprintPropertiesNumberPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortSystemBlueprintPropertiesNumberProps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesNumberProps | cdktf.IResolvable | undefined) {
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

export class PortSystemBlueprintPropertiesNumberPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortSystemBlueprintPropertiesNumberProps } | cdktf.IResolvable

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
  public get(key: string): PortSystemBlueprintPropertiesNumberPropsOutputReference {
    return new PortSystemBlueprintPropertiesNumberPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortSystemBlueprintPropertiesObjectProps {
  /**
  * The default of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#default PortSystemBlueprint#default}
  */
  readonly default?: string;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#description PortSystemBlueprint#description}
  */
  readonly description?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#icon PortSystemBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#required PortSystemBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The spec of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#spec PortSystemBlueprint#spec}
  */
  readonly spec?: string;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#title PortSystemBlueprint#title}
  */
  readonly title?: string;
}

export function portSystemBlueprintPropertiesObjectPropsToTerraform(struct?: PortSystemBlueprintPropertiesObjectProps | cdktf.IResolvable): any {
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


export function portSystemBlueprintPropertiesObjectPropsToHclTerraform(struct?: PortSystemBlueprintPropertiesObjectProps | cdktf.IResolvable): any {
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

export class PortSystemBlueprintPropertiesObjectPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortSystemBlueprintPropertiesObjectProps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesObjectProps | cdktf.IResolvable | undefined) {
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

export class PortSystemBlueprintPropertiesObjectPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortSystemBlueprintPropertiesObjectProps } | cdktf.IResolvable

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
  public get(key: string): PortSystemBlueprintPropertiesObjectPropsOutputReference {
    return new PortSystemBlueprintPropertiesObjectPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortSystemBlueprintPropertiesStringPropsSpecAuthentication {
  /**
  * The authorizationUrl of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#authorization_url PortSystemBlueprint#authorization_url}
  */
  readonly authorizationUrl: string;
  /**
  * The clientId of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#client_id PortSystemBlueprint#client_id}
  */
  readonly clientId: string;
  /**
  * The tokenUrl of the spec authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#token_url PortSystemBlueprint#token_url}
  */
  readonly tokenUrl: string;
}

export function portSystemBlueprintPropertiesStringPropsSpecAuthenticationToTerraform(struct?: PortSystemBlueprintPropertiesStringPropsSpecAuthentication | cdktf.IResolvable): any {
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


export function portSystemBlueprintPropertiesStringPropsSpecAuthenticationToHclTerraform(struct?: PortSystemBlueprintPropertiesStringPropsSpecAuthentication | cdktf.IResolvable): any {
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

export class PortSystemBlueprintPropertiesStringPropsSpecAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortSystemBlueprintPropertiesStringPropsSpecAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesStringPropsSpecAuthentication | cdktf.IResolvable | undefined) {
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
export interface PortSystemBlueprintPropertiesStringProps {
  /**
  * The default of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#default PortSystemBlueprint#default}
  */
  readonly default?: string;
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#description PortSystemBlueprint#description}
  */
  readonly description?: string;
  /**
  * The enum of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#enum PortSystemBlueprint#enum}
  */
  readonly enum?: string[];
  /**
  * The enum colors of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#enum_colors PortSystemBlueprint#enum_colors}
  */
  readonly enumColors?: { [key: string]: string };
  /**
  * The format of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#format PortSystemBlueprint#format}
  */
  readonly format?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#icon PortSystemBlueprint#icon}
  */
  readonly icon?: string;
  /**
  * The max length of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#max_length PortSystemBlueprint#max_length}
  */
  readonly maxLength?: number;
  /**
  * The min length of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#min_length PortSystemBlueprint#min_length}
  */
  readonly minLength?: number;
  /**
  * The pattern of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#pattern PortSystemBlueprint#pattern}
  */
  readonly pattern?: string;
  /**
  * Whether the property is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#required PortSystemBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The spec of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#spec PortSystemBlueprint#spec}
  */
  readonly spec?: string;
  /**
  * The spec authentication of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#spec_authentication PortSystemBlueprint#spec_authentication}
  */
  readonly specAuthentication?: PortSystemBlueprintPropertiesStringPropsSpecAuthentication;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#title PortSystemBlueprint#title}
  */
  readonly title?: string;
}

export function portSystemBlueprintPropertiesStringPropsToTerraform(struct?: PortSystemBlueprintPropertiesStringProps | cdktf.IResolvable): any {
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
    spec_authentication: portSystemBlueprintPropertiesStringPropsSpecAuthenticationToTerraform(struct!.specAuthentication),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portSystemBlueprintPropertiesStringPropsToHclTerraform(struct?: PortSystemBlueprintPropertiesStringProps | cdktf.IResolvable): any {
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
      value: portSystemBlueprintPropertiesStringPropsSpecAuthenticationToHclTerraform(struct!.specAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "PortSystemBlueprintPropertiesStringPropsSpecAuthentication",
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

export class PortSystemBlueprintPropertiesStringPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortSystemBlueprintPropertiesStringProps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintPropertiesStringProps | cdktf.IResolvable | undefined) {
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
  private _specAuthentication = new PortSystemBlueprintPropertiesStringPropsSpecAuthenticationOutputReference(this, "spec_authentication");
  public get specAuthentication() {
    return this._specAuthentication;
  }
  public putSpecAuthentication(value: PortSystemBlueprintPropertiesStringPropsSpecAuthentication) {
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

export class PortSystemBlueprintPropertiesStringPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortSystemBlueprintPropertiesStringProps } | cdktf.IResolvable

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
  public get(key: string): PortSystemBlueprintPropertiesStringPropsOutputReference {
    return new PortSystemBlueprintPropertiesStringPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortSystemBlueprintProperties {
  /**
  * The array property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#array_props PortSystemBlueprint#array_props}
  */
  readonly arrayProps?: { [key: string]: PortSystemBlueprintPropertiesArrayProps } | cdktf.IResolvable;
  /**
  * The boolean property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#boolean_props PortSystemBlueprint#boolean_props}
  */
  readonly booleanProps?: { [key: string]: PortSystemBlueprintPropertiesBooleanProps } | cdktf.IResolvable;
  /**
  * The number property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#number_props PortSystemBlueprint#number_props}
  */
  readonly numberProps?: { [key: string]: PortSystemBlueprintPropertiesNumberProps } | cdktf.IResolvable;
  /**
  * The object property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#object_props PortSystemBlueprint#object_props}
  */
  readonly objectProps?: { [key: string]: PortSystemBlueprintPropertiesObjectProps } | cdktf.IResolvable;
  /**
  * The string property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#string_props PortSystemBlueprint#string_props}
  */
  readonly stringProps?: { [key: string]: PortSystemBlueprintPropertiesStringProps } | cdktf.IResolvable;
}

export function portSystemBlueprintPropertiesToTerraform(struct?: PortSystemBlueprintProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_props: cdktf.hashMapper(portSystemBlueprintPropertiesArrayPropsToTerraform)(struct!.arrayProps),
    boolean_props: cdktf.hashMapper(portSystemBlueprintPropertiesBooleanPropsToTerraform)(struct!.booleanProps),
    number_props: cdktf.hashMapper(portSystemBlueprintPropertiesNumberPropsToTerraform)(struct!.numberProps),
    object_props: cdktf.hashMapper(portSystemBlueprintPropertiesObjectPropsToTerraform)(struct!.objectProps),
    string_props: cdktf.hashMapper(portSystemBlueprintPropertiesStringPropsToTerraform)(struct!.stringProps),
  }
}


export function portSystemBlueprintPropertiesToHclTerraform(struct?: PortSystemBlueprintProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_props: {
      value: cdktf.hashMapperHcl(portSystemBlueprintPropertiesArrayPropsToHclTerraform)(struct!.arrayProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortSystemBlueprintPropertiesArrayPropsMap",
    },
    boolean_props: {
      value: cdktf.hashMapperHcl(portSystemBlueprintPropertiesBooleanPropsToHclTerraform)(struct!.booleanProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortSystemBlueprintPropertiesBooleanPropsMap",
    },
    number_props: {
      value: cdktf.hashMapperHcl(portSystemBlueprintPropertiesNumberPropsToHclTerraform)(struct!.numberProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortSystemBlueprintPropertiesNumberPropsMap",
    },
    object_props: {
      value: cdktf.hashMapperHcl(portSystemBlueprintPropertiesObjectPropsToHclTerraform)(struct!.objectProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortSystemBlueprintPropertiesObjectPropsMap",
    },
    string_props: {
      value: cdktf.hashMapperHcl(portSystemBlueprintPropertiesStringPropsToHclTerraform)(struct!.stringProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortSystemBlueprintPropertiesStringPropsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortSystemBlueprintPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortSystemBlueprintProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintProperties | cdktf.IResolvable | undefined) {
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
  private _arrayProps = new PortSystemBlueprintPropertiesArrayPropsMap(this, "array_props");
  public get arrayProps() {
    return this._arrayProps;
  }
  public putArrayProps(value: { [key: string]: PortSystemBlueprintPropertiesArrayProps } | cdktf.IResolvable) {
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
  private _booleanProps = new PortSystemBlueprintPropertiesBooleanPropsMap(this, "boolean_props");
  public get booleanProps() {
    return this._booleanProps;
  }
  public putBooleanProps(value: { [key: string]: PortSystemBlueprintPropertiesBooleanProps } | cdktf.IResolvable) {
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
  private _numberProps = new PortSystemBlueprintPropertiesNumberPropsMap(this, "number_props");
  public get numberProps() {
    return this._numberProps;
  }
  public putNumberProps(value: { [key: string]: PortSystemBlueprintPropertiesNumberProps } | cdktf.IResolvable) {
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
  private _objectProps = new PortSystemBlueprintPropertiesObjectPropsMap(this, "object_props");
  public get objectProps() {
    return this._objectProps;
  }
  public putObjectProps(value: { [key: string]: PortSystemBlueprintPropertiesObjectProps } | cdktf.IResolvable) {
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
  private _stringProps = new PortSystemBlueprintPropertiesStringPropsMap(this, "string_props");
  public get stringProps() {
    return this._stringProps;
  }
  public putStringProps(value: { [key: string]: PortSystemBlueprintPropertiesStringProps } | cdktf.IResolvable) {
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
export interface PortSystemBlueprintRelations {
  /**
  * The description of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#description PortSystemBlueprint#description}
  */
  readonly description?: string;
  /**
  * The many of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#many PortSystemBlueprint#many}
  */
  readonly many?: boolean | cdktf.IResolvable;
  /**
  * The required of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#required PortSystemBlueprint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The target of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#target PortSystemBlueprint#target}
  */
  readonly target: string;
  /**
  * The title of the relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#title PortSystemBlueprint#title}
  */
  readonly title?: string;
}

export function portSystemBlueprintRelationsToTerraform(struct?: PortSystemBlueprintRelations | cdktf.IResolvable): any {
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


export function portSystemBlueprintRelationsToHclTerraform(struct?: PortSystemBlueprintRelations | cdktf.IResolvable): any {
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

export class PortSystemBlueprintRelationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortSystemBlueprintRelations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortSystemBlueprintRelations | cdktf.IResolvable | undefined) {
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

export class PortSystemBlueprintRelationsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortSystemBlueprintRelations } | cdktf.IResolvable

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
  public get(key: string): PortSystemBlueprintRelationsOutputReference {
    return new PortSystemBlueprintRelationsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint port_system_blueprint}
*/
export class PortSystemBlueprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_system_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortSystemBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortSystemBlueprint to import
  * @param importFromId The id of the existing PortSystemBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortSystemBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_system_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_system_blueprint port_system_blueprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortSystemBlueprintConfig
  */
  public constructor(scope: Construct, id: string, config: PortSystemBlueprintConfig) {
    super(scope, id, {
      terraformResourceType: 'port_system_blueprint',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
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
    this._identifier = config.identifier;
    this._mirrorProperties.internalValue = config.mirrorProperties;
    this._properties.internalValue = config.properties;
    this._relations.internalValue = config.relations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calculation_properties - computed: false, optional: true, required: false
  private _calculationProperties = new PortSystemBlueprintCalculationPropertiesMap(this, "calculation_properties");
  public get calculationProperties() {
    return this._calculationProperties;
  }
  public putCalculationProperties(value: { [key: string]: PortSystemBlueprintCalculationProperties } | cdktf.IResolvable) {
    this._calculationProperties.internalValue = value;
  }
  public resetCalculationProperties() {
    this._calculationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculationPropertiesInput() {
    return this._calculationProperties.internalValue;
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

  // mirror_properties - computed: false, optional: true, required: false
  private _mirrorProperties = new PortSystemBlueprintMirrorPropertiesMap(this, "mirror_properties");
  public get mirrorProperties() {
    return this._mirrorProperties;
  }
  public putMirrorProperties(value: { [key: string]: PortSystemBlueprintMirrorProperties } | cdktf.IResolvable) {
    this._mirrorProperties.internalValue = value;
  }
  public resetMirrorProperties() {
    this._mirrorProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPropertiesInput() {
    return this._mirrorProperties.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new PortSystemBlueprintPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: PortSystemBlueprintProperties) {
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
  private _relations = new PortSystemBlueprintRelationsMap(this, "relations");
  public get relations() {
    return this._relations;
  }
  public putRelations(value: { [key: string]: PortSystemBlueprintRelations } | cdktf.IResolvable) {
    this._relations.internalValue = value;
  }
  public resetRelations() {
    this._relations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      calculation_properties: cdktf.hashMapper(portSystemBlueprintCalculationPropertiesToTerraform)(this._calculationProperties.internalValue),
      identifier: cdktf.stringToTerraform(this._identifier),
      mirror_properties: cdktf.hashMapper(portSystemBlueprintMirrorPropertiesToTerraform)(this._mirrorProperties.internalValue),
      properties: portSystemBlueprintPropertiesToTerraform(this._properties.internalValue),
      relations: cdktf.hashMapper(portSystemBlueprintRelationsToTerraform)(this._relations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      calculation_properties: {
        value: cdktf.hashMapperHcl(portSystemBlueprintCalculationPropertiesToHclTerraform)(this._calculationProperties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PortSystemBlueprintCalculationPropertiesMap",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_properties: {
        value: cdktf.hashMapperHcl(portSystemBlueprintMirrorPropertiesToHclTerraform)(this._mirrorProperties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PortSystemBlueprintMirrorPropertiesMap",
      },
      properties: {
        value: portSystemBlueprintPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortSystemBlueprintProperties",
      },
      relations: {
        value: cdktf.hashMapperHcl(portSystemBlueprintRelationsToHclTerraform)(this._relations.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PortSystemBlueprintRelationsMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
